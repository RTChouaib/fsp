module.exports = [
"[project]/app/(app)/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AppLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/session.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$progress$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/progress.ts [app-rsc] (ecmascript)");
;
;
;
;
;
const TABS = [
    {
        href: '/dashboard',
        icon: '⌂',
        label: 'Start'
    },
    {
        href: '/practice',
        icon: '◐',
        label: 'Üben'
    },
    {
        href: '/test',
        icon: '▤',
        label: 'Test'
    },
    {
        href: '/mistakes',
        icon: '✕',
        label: 'Fehler'
    },
    {
        href: '/search',
        icon: '⌕',
        label: 'Suche'
    }
];
async function AppLayout({ children }) {
    const userId = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$session$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getCurrentUserId"])();
    if (!userId) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/pricing?reason=auth');
    const subscription = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$progress$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getSubscription"])(userId);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$progress$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["canAccess"])(subscription, 'full')) (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["redirect"])('/pricing?reason=paid');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "topbar",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "topbar-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            href: "/dashboard",
                            className: "logo",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "dot"
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/layout.tsx",
                                    lineNumber: 26,
                                    columnNumber: 13
                                }, this),
                                "FSP Terminology"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(app)/layout.tsx",
                            lineNumber: 25,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "nav-links",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/dashboard",
                                    className: "nav-link",
                                    children: "START"
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/layout.tsx",
                                    lineNumber: 29,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/practice",
                                    className: "nav-link",
                                    children: "ÜBEN"
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/layout.tsx",
                                    lineNumber: 30,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/test",
                                    className: "nav-link",
                                    children: "TEST"
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/layout.tsx",
                                    lineNumber: 31,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/account",
                                    className: "nav-link",
                                    children: "KONTO"
                                }, void 0, false, {
                                    fileName: "[project]/app/(app)/layout.tsx",
                                    lineNumber: 32,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/(app)/layout.tsx",
                            lineNumber: 28,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/(app)/layout.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(app)/layout.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "app-shell",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "wrap",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/app/(app)/layout.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/(app)/layout.tsx",
                lineNumber: 36,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tabbar",
                children: TABS.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: t.href,
                        className: "tab-item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "tab-icon",
                                children: t.icon
                            }, void 0, false, {
                                fileName: "[project]/app/(app)/layout.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this),
                            t.label
                        ]
                    }, t.href, true, {
                        fileName: "[project]/app/(app)/layout.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/(app)/layout.tsx",
                lineNumber: 39,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/(app)/layout.tsx",
        lineNumber: 22,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/(app)/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/app/(app)/layout.tsx [app-rsc] (ecmascript)"));
}),
"[project]/lib/db.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "db",
    ()=>db
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__ = __turbopack_context__.i("[externals]/@prisma/client [external] (@prisma/client, cjs, [project]/node_modules/@prisma/client)");
;
const globalForPrisma = globalThis;
const db = globalForPrisma.prisma ?? new __TURBOPACK__imported__module__$5b$externals$5d2f40$prisma$2f$client__$5b$external$5d$__$2840$prisma$2f$client$2c$__cjs$2c$__$5b$project$5d2f$node_modules$2f40$prisma$2f$client$29$__["PrismaClient"]();
if ("TURBOPACK compile-time truthy", 1) {
    globalForPrisma.prisma = db;
}
}),
"[project]/lib/progress.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "canAccess",
    ()=>canAccess,
    "deleteAccount",
    ()=>deleteAccount,
    "getDueTermIds",
    ()=>getDueTermIds,
    "getMistakeTermIds",
    ()=>getMistakeTermIds,
    "getOrCreateUser",
    ()=>getOrCreateUser,
    "getProgressMap",
    ()=>getProgressMap,
    "getSubscription",
    ()=>getSubscription,
    "getTestResults",
    ()=>getTestResults,
    "markSubscriptionCancelPending",
    ()=>markSubscriptionCancelPending,
    "markSubscriptionExpired",
    ()=>markSubscriptionExpired,
    "recordAnswer",
    ()=>recordAnswer,
    "saveTestResult",
    ()=>saveTestResult,
    "upsertSubscriptionFromPaddle",
    ()=>upsertSubscriptionFromPaddle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-rsc] (ecmascript)");
;
async function getOrCreateUser(email) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].user.upsert({
        where: {
            email
        },
        update: {},
        create: {
            email
        }
    });
}
function canAccess(subscription, feature) {
    if (feature === 'demo') return true; // everyone gets the 5-question preview
    if (!subscription) return false;
    const status = subscription.status;
    return status === 'active' || status === 'trial';
}
async function getSubscription(userId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].subscription.findUnique({
        where: {
            userId
        }
    });
}
async function upsertSubscriptionFromPaddle(data) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].subscription.upsert({
        where: {
            userId: data.userId
        },
        update: {
            status: data.status,
            plan: data.plan,
            paddleCustomerId: data.paddleCustomerId,
            paddleSubscriptionId: data.paddleSubscriptionId,
            currentPeriodEnd: data.currentPeriodEnd,
            cancelAtPeriodEnd: false
        },
        create: {
            userId: data.userId,
            status: data.status,
            plan: data.plan,
            paddleCustomerId: data.paddleCustomerId,
            paddleSubscriptionId: data.paddleSubscriptionId,
            currentPeriodEnd: data.currentPeriodEnd
        }
    });
}
async function markSubscriptionCancelPending(userId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].subscription.update({
        where: {
            userId
        },
        data: {
            cancelAtPeriodEnd: true
        }
    });
}
async function markSubscriptionExpired(userId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].subscription.update({
        where: {
            userId
        },
        data: {
            status: 'expired',
            cancelAtPeriodEnd: false
        }
    });
}
/* ============================================================
   TERM PROGRESS + SPACED REPETITION
   Same algorithm as the prototype's recordAnswer(): confidence
   0-5, interval schedule [0,1,3,7,14,30] days, mistakes tracked
   on every wrong answer and cleared on the next correct one.
   ============================================================ */ const INTERVAL_DAYS = [
    0,
    1,
    3,
    7,
    14,
    30
];
function addDays(base, days) {
    const d = new Date(base);
    d.setDate(d.getDate() + days);
    return d;
}
async function getProgressMap(userId) {
    const rows = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].termProgress.findMany({
        where: {
            userId
        }
    });
    const map = {};
    for (const row of rows)map[row.termId] = row;
    return map;
}
async function recordAnswer(userId, termId, correct) {
    const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].termProgress.findUnique({
        where: {
            userId_termId: {
                userId,
                termId
            }
        }
    });
    const confidence = existing?.confidence ?? 2;
    const nextConfidence = correct ? Math.min(5, confidence + 1) : Math.max(0, confidence - 1);
    const nextReview = correct ? addDays(new Date(), INTERVAL_DAYS[nextConfidence] ?? 30) : addDays(new Date(), 1);
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].termProgress.upsert({
        where: {
            userId_termId: {
                userId,
                termId
            }
        },
        update: {
            timesSeen: {
                increment: 1
            },
            correctCount: {
                increment: correct ? 1 : 0
            },
            incorrectCount: {
                increment: correct ? 0 : 1
            },
            streak: correct ? {
                increment: 1
            } : 0,
            confidence: nextConfidence,
            lastReviewed: new Date(),
            nextReview
        },
        create: {
            userId,
            termId,
            timesSeen: 1,
            correctCount: correct ? 1 : 0,
            incorrectCount: correct ? 0 : 1,
            streak: correct ? 1 : 0,
            confidence: nextConfidence,
            lastReviewed: new Date(),
            nextReview
        }
    });
    if (correct) {
        // a correct answer clears any existing mistake entry for this term
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].mistake.deleteMany({
            where: {
                userId,
                termId
            }
        });
    } else {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].mistake.upsert({
            where: {
                userId_termId: {
                    userId,
                    termId
                }
            },
            update: {},
            create: {
                userId,
                termId
            }
        });
    }
}
async function getDueTermIds(userId, allTermIds) {
    const progress = await getProgressMap(userId);
    const today = new Date();
    const due = allTermIds.filter((id)=>{
        const p = progress[id];
        if (!p) return true; // never seen
        return !p.nextReview || p.nextReview <= today;
    });
    return due.sort((a, b)=>{
        const pa = progress[a];
        const pb = progress[b];
        const wa = pa ? pa.incorrectCount - pa.correctCount : 0;
        const wb = pb ? pb.incorrectCount - pb.correctCount : 0;
        return wb - wa;
    });
}
async function getMistakeTermIds(userId) {
    const rows = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].mistake.findMany({
        where: {
            userId
        },
        select: {
            termId: true
        }
    });
    return rows.map((r)=>r.termId);
}
async function saveTestResult(userId, result) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].testResult.create({
        data: {
            userId,
            score: result.score,
            total: result.total,
            weakCategories: result.weakCategories,
            wrongTermIds: result.wrongTermIds
        }
    });
}
async function getTestResults(userId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].testResult.findMany({
        where: {
            userId
        },
        orderBy: {
            date: 'desc'
        }
    });
}
async function deleteAccount(userId) {
    // relations use onDelete: Cascade in schema.prisma, so this removes
    // Subscription, TermProgress, Mistake, and TestResult rows too.
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].user.delete({
        where: {
            id: userId
        }
    });
}
}),
"[project]/lib/session.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearSession",
    ()=>clearSession,
    "getCurrentUserId",
    ()=>getCurrentUserId,
    "reconcileUserSession",
    ()=>reconcileUserSession,
    "setSession",
    ()=>setSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-rsc] (ecmascript)");
;
;
const COOKIE_NAME = 'uid';
const EMAIL_COOKIE_NAME = 'user-email';
const cookieOptions = {
    httpOnly: true,
    secure: ("TURBOPACK compile-time value", "development") === 'production',
    sameSite: 'lax',
    maxAge: 60 * 60 * 24 * 365,
    path: '/'
};
function reconcileUserSession({ uid, email, userByEmail }) {
    if (!email) return uid ?? null;
    const userIdFromEmail = userByEmail[email];
    return userIdFromEmail ?? uid ?? null;
}
async function getCurrentUserId() {
    const store = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    const uid = store.get(COOKIE_NAME)?.value ?? null;
    const email = store.get(EMAIL_COOKIE_NAME)?.value ?? null;
    if (!uid && !email) return null;
    if (email) {
        const user = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["db"].user.findUnique({
            where: {
                email
            }
        });
        if (user) {
            if (uid !== user.id) {
                store.set(COOKIE_NAME, user.id, cookieOptions);
            }
            return user.id;
        }
    }
    return uid ?? null;
}
async function setSession(userId, email) {
    const store = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    store.set(COOKIE_NAME, userId, cookieOptions);
    if (email) {
        store.set(EMAIL_COOKIE_NAME, email, cookieOptions);
    }
}
async function clearSession() {
    const store = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"])();
    store.delete(COOKIE_NAME);
    store.delete(EMAIL_COOKIE_NAME);
}
}),
];

//# sourceMappingURL=_0xjx1gb._.js.map