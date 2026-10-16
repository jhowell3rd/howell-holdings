#!/usr/bin/env bash
# Draw this site's entity facts from the register.
#
# These pages named companies, described them and asserted who owned whom, all
# by hand. That is a copy of the register, and the register is what changes —
# which is how one of these sites came to advertise a company that had filed
# Articles of Dissolution two months earlier, in the present tense.
#
# The markers in the HTML are committed EMPTY and filled here. A rendered name
# in the repository is still a copy: right until the register moves and the
# build does not run, then wrong with no signal.
#
# Failing is safe. Netlify keeps serving the last successful deploy, so the live
# site holds what the register said when it last built.
set -euo pipefail
cd "$(dirname "$0")/.."

if [ -z "${SUPABASE_URL:-}" ] || [ -z "${SUPABASE_SERVICE_ROLE_KEY:-}" ]; then
  echo "FAIL: no register credentials on this site, so its entity facts cannot be derived." >&2
  echo "      Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY on this Netlify site." >&2
  exit 1
fi

printf '__ENTITIES_JSON:status=active__\n' > scripts/.entities.json
node scripts/derive-entity-facts.js scripts/.entities.json
node scripts/entities.js
rm -f scripts/.entities.json
