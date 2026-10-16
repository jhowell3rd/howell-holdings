#!/usr/bin/env node
// This site's own facts, drawn from the register.
//
// The footer stated the company's formation state, its formation date and the
// company that owns it, all written by hand on a page read outside the family.
// Every one of those is a column in em_entities_v1, and a hand-written copy of
// a register fact is right until the register changes and then wrong with no
// signal — which is how one of these sites came to advertise, in the present
// tense, a company dissolved two months earlier.
const path = require("path");
const B = require("./entity-blocks.js");

const rows = B.load(__dirname);

// Whose site this is, by what the register says it IS. Naming the company here
// would be the same hardcoding as naming it in the footer, moved one file along.
const me = B.self(rows, /^Corporate Trustee$/i);
const parent = B.parentOf(rows, me);

// THE RELATIONSHIP, IN THE REGISTER'S WORDS. This page said "Howell Holdings
// is the Corporate Trustee of The Howell Legacy Group" — a role and a parent,
// both columns here, written out by hand on the page's first line.
if (!parent) B.fail(`the register gives ${me.legal_name} no parent, so this page cannot say whose trustee it is`);

const claim = `                    ${B.esc(me.dba || me.legal_name.replace(/\s+LLC$/, ""))} is the ${B.esc(me.role)} of ${B.esc(parent.legal_name)}. The fiduciary holds the multi-generational mandate.\n`;

B.write(require("path").join(__dirname, "..", "index.html"), "claim", claim);
console.log(`  entities: ${me.legal_name} — ${me.role} of ${parent.legal_name}`);
