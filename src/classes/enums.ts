/**
 * Log levels used to control which messages the logger outputs.
 *
 * @module
 */

/**
 * Severity levels of the logger.
 *
 * The selected level sets the minimum severity a message needs to be logged.
 * From lowest to highest: `DEBUG`, `INFO`, `WARN`, `ERROR`.
 *
 * @example
 *   ```ts
 *   const options: LoggerOptions = { level: Level.INFO };
 *   ```;
 */
export enum Level {
  /** Logs all messages: `debug`, `info`, `warn`, and `error`. */
  DEBUG = "debug",
  /** Logs `info`, `warn`, and `error` messages. */
  INFO = "info",
  /** Logs `warn` and `error` messages. */
  WARN = "warn",
  /** Logs only `error` messages. */
  ERROR = "error",
}
