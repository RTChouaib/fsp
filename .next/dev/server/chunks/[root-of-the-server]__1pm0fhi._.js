module.exports = [
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/runtime-reacts.external.js [external] (next/dist/server/runtime-reacts.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/server/runtime-reacts.external.js", () => require("next/dist/server/runtime-reacts.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[project]/app/api/webhooks/paddle/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$paddle$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/paddle.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$progress$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/progress.ts [app-route] (ecmascript)");
;
;
async function POST(req) {
    const rawBody = await req.text();
    const signature = req.headers.get('paddle-signature') ?? '';
    let event;
    try {
        event = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$paddle$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["paddle"].webhooks.unmarshal(rawBody, process.env.PAYMENT_WEBHOOK_SECRET, signature);
    } catch (err) {
        console.error('Paddle webhook signature verification failed', err);
        return new Response('Invalid signature', {
            status: 400
        });
    }
    try {
        switch(event.eventType){
            case 'subscription.created':
            case 'subscription.updated':
                {
                    const sub = event.data;
                    const userId = sub.customData?.userId;
                    if (!userId) {
                        console.error('Paddle subscription event missing customData.userId', sub.id);
                        break;
                    }
                    const priceId = sub.items?.[0]?.price?.id;
                    const plan = priceId ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$paddle$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["planForPriceId"])(priceId) : null;
                    const status = sub.status === 'active' || sub.status === 'trialing' ? 'active' : 'expired';
                    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$progress$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["upsertSubscriptionFromPaddle"])({
                        userId,
                        status,
                        plan: plan ?? 'monthly',
                        paddleCustomerId: sub.customerId,
                        paddleSubscriptionId: sub.id,
                        currentPeriodEnd: new Date(sub.currentBillingPeriod?.endsAt ?? Date.now())
                    });
                    console.log('Subscription upserted successfully for user', userId);
                    break;
                }
            case 'subscription.canceled':
                {
                    const sub = event.data;
                    const userId = sub.customData?.userId;
                    if (userId) await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$progress$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["markSubscriptionExpired"])(userId);
                    break;
                }
            case 'transaction.completed':
                {
                    console.log('Paddle transaction completed', event.data.id);
                    break;
                }
            case 'transaction.payment_failed':
                {
                    console.warn('Paddle payment failed', event.data.id);
                    break;
                }
            default:
                break;
        }
    } catch (err) {
        console.error('Error processing Paddle webhook', err);
        return new Response('Webhook handler error', {
            status: 500
        });
    }
    return new Response('OK', {
        status: 200
    });
}
}),
"[project]/lib/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/lib/paddle.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "paddle",
    ()=>paddle,
    "planForPriceId",
    ()=>planForPriceId,
    "priceIdForPlan",
    ()=>priceIdForPlan
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paddle$2f$paddle$2d$node$2d$sdk$2f$dist$2f$esm$2f$index$2e$esm$2e$node$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@paddle/paddle-node-sdk/dist/esm/index.esm.node.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paddle$2f$paddle$2d$node$2d$sdk$2f$dist$2f$esm$2f$internal$2f$api$2f$environment$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@paddle/paddle-node-sdk/dist/esm/internal/api/environment.js [app-route] (ecmascript)");
;
const paddle = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paddle$2f$paddle$2d$node$2d$sdk$2f$dist$2f$esm$2f$index$2e$esm$2e$node$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Paddle"](process.env.PAYMENT_PROVIDER_KEY, {
    environment: process.env.PADDLE_ENV === 'production' ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paddle$2f$paddle$2d$node$2d$sdk$2f$dist$2f$esm$2f$internal$2f$api$2f$environment$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Environment"].production : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$paddle$2f$paddle$2d$node$2d$sdk$2f$dist$2f$esm$2f$internal$2f$api$2f$environment$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Environment"].sandbox
});
const PLAN_TO_PRICE_ID = {
    weekly: process.env.PRICE_WEEKLY,
    monthly: process.env.PRICE_MONTHLY,
    quarterly: process.env.PRICE_QUARTERLY
};
const PRICE_ID_TO_PLAN = Object.fromEntries(Object.entries(PLAN_TO_PRICE_ID).map(([plan, priceId])=>[
        priceId,
        plan
    ]));
function priceIdForPlan(plan) {
    const id = PLAN_TO_PRICE_ID[plan];
    if (!id) throw new Error(`No Paddle price configured for plan "${plan}"`);
    return id;
}
function planForPriceId(priceId) {
    return PRICE_ID_TO_PLAN[priceId] ?? null;
}
}),
"[project]/lib/progress.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/db.ts [app-route] (ecmascript)");
;
async function getOrCreateUser(email) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].user.upsert({
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
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].subscription.findUnique({
        where: {
            userId
        }
    });
}
async function upsertSubscriptionFromPaddle(data) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].subscription.upsert({
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
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].subscription.update({
        where: {
            userId
        },
        data: {
            cancelAtPeriodEnd: true
        }
    });
}
async function markSubscriptionExpired(userId) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].subscription.update({
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
    const rows = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].termProgress.findMany({
        where: {
            userId
        }
    });
    const map = {};
    for (const row of rows)map[row.termId] = row;
    return map;
}
async function recordAnswer(userId, termId, correct) {
    const existing = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].termProgress.findUnique({
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
    await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].termProgress.upsert({
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
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].mistake.deleteMany({
            where: {
                userId,
                termId
            }
        });
    } else {
        await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].mistake.upsert({
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
    const rows = await __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].mistake.findMany({
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
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].testResult.create({
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
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].testResult.findMany({
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
    return __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["db"].user.delete({
        where: {
            id: userId
        }
    });
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1pm0fhi._.js.map