// ============================================================
// BOXMEOUT — Market Detail Page (/markets/[market_id])
// ============================================================

interface MarketDetailPageProps {
  params: { market_id: string };
}

/**
 * Full detail view for a single boxing market.
 *
 * Page sections (top to bottom):
 *   1. Fight header: fighter names, weight class, title fight badge, venue
 *   2. CountdownTimer
 *   3. MarketStatusBadge
 *   4. MarketOddsBar (live, updates every 10s while open)
 *   5. Pool sizes: "X XLM on [A] / Y XLM Draw / Z XLM on [B]"
 *   6. BetPanel (right column on desktop, below odds on mobile)
 *   7. Recent bets table (last 20 bets, newest first)
 *   8. Oracle info: who resolved, which oracle, tx link (shown after resolved)
 *
 * Uses useMarket(market_id) for data.
 * Shows 404 message if market not found.
 * Shows error boundary fallback on unexpected errors.
 */
export default function MarketDetailPage({
  params,
}: MarketDetailPageProps): JSX.Element {
  // TODO: implement
}
