/**
 * Rules Actions.
 * Available actions:
 * - Load Rules: import rules and send RULES_LOADED action with data.
 */
import rules from '../data.json';

export const RULES_LOADED = 'RULES_LOADED';

export function doLoadRules() {
    return {
        type: RULES_LOADED,
        rules: rules,
    }
}
