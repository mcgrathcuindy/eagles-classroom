// Cache Utility for YouTube API Data
// Uses localStorage to cache API responses and reduce quota usage

const CACHE_PREFIX = 'eagles_classroom_';
const DEFAULT_TTL = 60 * 60 * 1000; // 1 hour in milliseconds

/**
 * Generate a cache key with prefix
 * @param {string} key - Cache key
 * @returns {string} Prefixed cache key
 */
function getCacheKey(key) {
  return `${CACHE_PREFIX}${key}`;
}

/**
 * Set data in cache with expiration
 * @param {string} key - Cache key
 * @param {any} data - Data to cache
 * @param {number} ttl - Time to live in milliseconds (default: 1 hour)
 */
export function setCache(key, data, ttl = DEFAULT_TTL) {
  try {
    const cacheData = {
      data,
      timestamp: Date.now(),
      expiresAt: Date.now() + ttl,
    };
    localStorage.setItem(getCacheKey(key), JSON.stringify(cacheData));
  } catch (error) {
    console.warn('Failed to set cache:', error);
    // Silently fail if localStorage is unavailable or full
  }
}

/**
 * Get data from cache if not expired
 * @param {string} key - Cache key
 * @returns {any|null} Cached data or null if expired/not found
 */
export function getCache(key) {
  try {
    const cached = localStorage.getItem(getCacheKey(key));
    if (!cached) return null;

    const cacheData = JSON.parse(cached);

    // Check if cache is expired
    if (Date.now() > cacheData.expiresAt) {
      // Remove expired cache
      clearCache(key);
      return null;
    }

    return cacheData.data;
  } catch (error) {
    console.warn('Failed to get cache:', error);
    return null;
  }
}

/**
 * Clear specific cache entry
 * @param {string} key - Cache key to clear
 */
export function clearCache(key) {
  try {
    localStorage.removeItem(getCacheKey(key));
  } catch (error) {
    console.warn('Failed to clear cache:', error);
  }
}

/**
 * Clear all app caches
 */
export function clearAllCache() {
  try {
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      if (key.startsWith(CACHE_PREFIX)) {
        localStorage.removeItem(key);
      }
    });
  } catch (error) {
    console.warn('Failed to clear all cache:', error);
  }
}

/**
 * Get cache metadata (timestamp, expiration)
 * @param {string} key - Cache key
 * @returns {Object|null} Cache metadata or null if not found
 */
export function getCacheMetadata(key) {
  try {
    const cached = localStorage.getItem(getCacheKey(key));
    if (!cached) return null;

    const cacheData = JSON.parse(cached);
    return {
      timestamp: cacheData.timestamp,
      expiresAt: cacheData.expiresAt,
      age: Date.now() - cacheData.timestamp,
      remainingTTL: cacheData.expiresAt - Date.now(),
      isExpired: Date.now() > cacheData.expiresAt,
    };
  } catch (error) {
    console.warn('Failed to get cache metadata:', error);
    return null;
  }
}
