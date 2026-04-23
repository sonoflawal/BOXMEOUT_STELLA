// ============================================================
// BOXMEOUT — MarketCard Component
// Compact card for the home page market grid.
// Contributors: implement the JSX body.
// ============================================================

import type { Market } from '../../types';

interface MarketCardProps {
  market: Market;
}

/**
 * Displays a compact summary card for a single boxing market.
 *
 * Must render:
 *   - Fighter A name vs Fighter B name
 *   - Weight class badge
 *   - Title fight indicator (if applicable)
 *   - MarketOddsBar (pool proportions)
 *   - MarketStatusBadge
 *   - CountdownTimer (fight start)
 *   - Total pooled XLM
 *
 * Entire card is a clickable link to /markets/[market_id].
 * Use Next.js <Link> for client-side navigation.
 */
export function MarketCard({ market }: MarketCardProps): JSX.Element {
  // TODO: implement
}
