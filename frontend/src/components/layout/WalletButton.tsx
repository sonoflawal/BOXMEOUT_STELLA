// ============================================================
// BOXMEOUT — WalletButton Component
// ============================================================

/**
 * Top-right wallet connect / disconnect control.
 *
 * When NOT connected:
 *   - Renders "Connect Wallet" button
 *   - Clicking triggers useWallet().connect()
 *   - Shows spinner while isConnecting === true
 *
 * When connected:
 *   - Renders truncated address (first 4 + last 4 chars, e.g. "GABC...WXYZ")
 *   - Shows XLM balance next to address
 *   - Clicking opens a small dropdown: [Copy Address] [Disconnect]
 *
 * Uses the useWallet hook for all state.
 */
export function WalletButton(): JSX.Element {
  // TODO: implement
}
