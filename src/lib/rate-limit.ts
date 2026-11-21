/** Simple in-memory rate limiter (per-instance). Good enough for soft abuse control. */

type Bucket = { count: number; resetAt: number };

const buckets = new Map<string, Bucket>();

export function clientIp(req: Request): string {
  const xf = req.headers.get("x-forwarded-for");
  if (xf) return xf.split(",")[0]?.trim() || "unknown";
  return req.headers.get("x-real-ip")?.trim() || "unknown";
}

export function rateLimit(
  key: string,
  limit: number,
  windowMs: number
): { ok: boolean; remaining: number } {
  const now = Date.now();
  let b = buckets.get(key);
  if (!b || now >= b.resetAt) {
    b = { count: 0, resetAt: now + windowMs };
    buckets.set(key, b);
  }
  b.count += 1;
  // Opportunistic cleanup
  if (buckets.size > 5000) {
    buckets.forEach((v, k) => {
      if (now >= v.resetAt) buckets.delete(k);
    });
  }
  return { ok: b.count <= limit, remaining: Math.max(0, limit - b.count) };
}
