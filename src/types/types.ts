/**
 * Type definitions for configuring the logger, including its options and
 * timestamp formatting.
 *
 * @module
 */

import type { Level } from "../classes/enums.ts";

/**
 * Available timestamp formats.
 *
 * - `iso`: [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html)
 *   format, as `YYYY-MM-DDTHH:mm:ss.sss±hh:mm`
 * - `time`: time only, as `HH:mm:ss`
 * - `datetime`: date and time, as `YYYY-MM-DD, HH:mm:ss`
 * - `unix`: milliseconds elapsed since the [Unix
 *   epoch](https://en.wikipedia.org/wiki/Unix_time)
 *
 * @example
 *   // ISO 8601
 *   const format: TimestampFormat = "iso";
 *   // Output: "2026-11-25T00:39:34.338-05:00"
 */
export type TimestampFormat = "iso" | "time" | "datetime" | "unix";

/**
 * Time zone used by the logger.
 *
 * - `UTC`: [Coordinated Universal
 *   Time](https://en.wikipedia.org/wiki/Coordinated_Universal_Time)
 * - `system`: the system's time zone
 * - Any other string: a time zone identifier, such as `America/New_York`
 *
 * @example
 *   // New York time
 *   const timeZone: TimestampTimeZone = "America/New_York";
 */
export type TimestampTimeZone = "system" | "UTC" | (string & {});

/**
 * Clock format used by the logger.
 *
 * - `24-hour`: as `HH:mm`, for example `13:25`
 * - `12-hour`: as `h:mm AM/PM`, for example `8:00 PM`
 * - `system`: the system's time format
 */
export type TimestampTimeFormat = "24-hour" | "12-hour" | "system";

/**
 * Locale used to format timestamps.
 *
 * Accepts any value supported by the `Intl` APIs, or `system` to use the
 * system's locale.
 */
export type TimestampLocale = Intl.LocalesArgument | "system";

/** Configuration for the logger's timestamps. */
export interface LoggerTimestamp {
  /** Output format of the timestamp. */
  format: TimestampFormat;
  /** Locale used to format the timestamp. */
  locale?: TimestampLocale;
  /** Clock format of the timestamp. */
  timeFormat?: TimestampTimeFormat;
  /** Time zone of the timestamp. */
  timeZone?: TimestampTimeZone;
}

/** Configuration options for the logger. */
export interface LoggerOptions {
  /** Whether to take the debug environment variable into account. */
  useDebugEnv?: boolean;
  /**
   * Whether to show timestamps. Pass a {@linkcode LoggerTimestamp} object to
   * customize them.
   */
  showTimestamp?: boolean | LoggerTimestamp;
  /** URL of the module using the logger, typically `import.meta.url`. */
  moduleUrl?: string;
  /**
   * Name of the module using the logger.
   * - Overrides `moduleUrl` when specified.
   */
  moduleName?: string;
  /** Custom prefix for log messages. */
  prefix?: string;
  /** Log level of the logger. */
  level?: Level;
}
