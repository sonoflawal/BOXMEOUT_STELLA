// ============================================================
// BOXMEOUT — BetHistoryTable Component
// ============================================================

import type { Bet } from '../../types';

interface BetHistoryTableProps {
  bets: Bet[];
  /** Called when user clicks "Claim" on an eligible row */
  onClaim: (market_contract_address: string) => void;
  /** Called when user clicks "Refund" on a cancelled market row */
  onRefund: (market_contract_address: string) => void;
}

/**
 * Table of bets, typically shown on the Portfolio page.
 *
 * Columns: Market ID | Side | Amount (XLM) | Status | Payout (XLM) | Action
 *
 * Action column rules:
 *   - Bet is on winning side + unclaimed  → show "Claim" button
 *   - Market is cancelled + unclaimed     → show "Refund" button
 *   - Already claimed                     → show payout amount in green
 *   - Bet lost                            → show "-" (no action)
 *   - Market not yet resolved             → show "Pending"
 *
 * Renders an empty state message when bets array is empty.
 */
export function BetHistoryTable({
  bets,
  onClaim,
  onRefund,
}: BetHistoryTableProps): JSX.Element {
  // TODO: implement
}
