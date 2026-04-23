// ============================================================
// BOXMEOUT — useMarkets Hook
// Fetches and auto-refreshes the full market list.
// Contributors: implement the hook body.
// ============================================================

import { useState, useEffect, useCallback } from 'react';
import type { Market } from '../types';
import type { MarketFilters } from '../services/api';

export interface UseMarketsResult {
  markets: Market[];
  total: number;
  isLoading: boolean;
  error: Error | null;
  /** Call to trigger a manual refetch */
  refetch: () => void;
}

/**
 * Fetches all boxing markets from the API.
 * Auto-polls every 30 seconds to pick up new markets and status changes.
 * Polling stops when the component using this hook unmounts.
 *
 * Returns stale data during a background refresh (isLoading stays false
 * to avoid layout flash — use a subtle spinner instead).
 */
export function useMarkets(filters?: MarketFilters): UseMarketsResult {
  // TODO: implement
  // Hint: use useEffect + setInterval for polling
  //       use useCallback for the refetch function
  //       clean up interval in useEffect return
}
