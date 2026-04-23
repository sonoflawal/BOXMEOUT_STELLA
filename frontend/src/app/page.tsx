// ============================================================
// BOXMEOUT — Home Page (/  )
// Lists all boxing markets with filters and sorting.
// ============================================================

/**
 * Home page — market discovery.
 *
 * Must render:
 *   - Page title: "BOXMEOUT — Boxing Prediction Market"
 *   - Filter bar:
 *       Weight class dropdown (All / Heavyweight / Super-Middleweight / etc.)
 *       Status filter (All / Open / Resolved)
 *       Sort: Soonest / Most Pooled / Newest
 *   - Market grid of MarketCard components
 *   - Skeleton grid while isLoading === true
 *   - Empty state when no markets match filters
 *   - Pagination controls if total > limit
 *
 * Uses the useMarkets hook for data.
 * Filter state is synced to URL query params (?status=open&weight_class=Heavyweight).
 */
export default function HomePage(): JSX.Element {
  // TODO: implement
}
