module.exports = {

"[project]/.next-internal/server/app/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/loading.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/loading.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/lib/api.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "fetchPostBySlug": (()=>fetchPostBySlug),
    "fetchPosts": (()=>fetchPosts)
});
async function fetchPosts() {
    try {
        const apiUrl = `${("TURBOPACK compile-time value", "http://localhost:1337")}/api/posts?populate=*`;
        console.log('Fetching from URL:', apiUrl);
        const res = await fetch(apiUrl);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log('Raw Strapi response:', JSON.stringify(data, null, 2));
        // Check if data has the expected structure
        if (!data.data || !Array.isArray(data.data)) {
            console.error('Unexpected data structure:', data);
            return [];
        }
        // Log each post's structure
        data.data.forEach((post, index)=>{
            console.log(`Post ${index + 1} structure:`, {
                id: post.id,
                Title: post.Title,
                Content: post.Content,
                Slug: post.Slug
            });
        });
        // Validate each post has the required fields
        const validPosts = data.data.filter((post)=>{
            const isValid = post?.Title && Array.isArray(post?.Content) && post?.Content.length > 0 && post?.Slug;
            if (!isValid) {
                console.warn('Invalid post structure:', post);
            }
            return isValid;
        });
        console.log('Number of valid posts:', validPosts.length);
        return validPosts;
    } catch (error) {
        console.error('Error fetching posts:', error);
        return [];
    }
}
async function fetchPostBySlug(slug) {
    try {
        const res = await fetch(`${("TURBOPACK compile-time value", "http://localhost:1337")}/api/posts?filters[Slug][$eq]=${slug}&populate=*`);
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        return data.data?.[0] || null;
    } catch (error) {
        console.error('Error fetching post by slug:', error);
        return null;
    }
}
}}),
"[project]/src/components/ui/card.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardAction": (()=>CardAction),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-rsc] (ecmascript)");
;
;
function Card({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 7,
        columnNumber: 5
    }, this);
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 20,
        columnNumber: 5
    }, this);
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("leading-none font-semibold", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 33,
        columnNumber: 5
    }, this);
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("text-muted-foreground text-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 43,
        columnNumber: 5
    }, this);
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 53,
        columnNumber: 5
    }, this);
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("px-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 66,
        columnNumber: 5
    }, this);
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cn"])("flex items-center px-6 [.border-t]:pt-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 76,
        columnNumber: 5
    }, this);
}
;
}}),
"[project]/src/components/ui/avatar.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Avatar": (()=>Avatar),
    "AvatarFallback": (()=>AvatarFallback),
    "AvatarImage": (()=>AvatarImage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const Avatar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Avatar() from the server but Avatar is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/avatar.tsx <module evaluation>", "Avatar");
const AvatarFallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AvatarFallback() from the server but AvatarFallback is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/avatar.tsx <module evaluation>", "AvatarFallback");
const AvatarImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AvatarImage() from the server but AvatarImage is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/avatar.tsx <module evaluation>", "AvatarImage");
}}),
"[project]/src/components/ui/avatar.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Avatar": (()=>Avatar),
    "AvatarFallback": (()=>AvatarFallback),
    "AvatarImage": (()=>AvatarImage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const Avatar = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call Avatar() from the server but Avatar is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/avatar.tsx", "Avatar");
const AvatarFallback = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AvatarFallback() from the server but AvatarFallback is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/avatar.tsx", "AvatarFallback");
const AvatarImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call AvatarImage() from the server but AvatarImage is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/avatar.tsx", "AvatarImage");
}}),
"[project]/src/components/ui/avatar.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/ui/avatar.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/components/ui/avatar.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>HomePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/api.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/avatar.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-rsc] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-rsc] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-rsc] (ecmascript) <export default as Share2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bookmark.js [app-rsc] (ecmascript) <export default as Bookmark>");
;
;
;
;
;
;
;
function getPlainText(content) {
    return content.map((block)=>block.children.map((child)=>child.text).join('')).join('\n');
}
async function HomePage() {
    const posts = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchPosts"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "w-full min-h-screen bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full bg-gradient-to-r from-zinc-900 to-zinc-800 py-8 px-4 md:py-16 md:px-0 flex flex-col items-center text-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-xl w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "text-2xl md:text-4xl font-bold mb-2 text-white",
                            children: "Deep Decrypt AI Newsletter | #1 AI & Tech Newsletter"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-zinc-200 mb-4 text-sm md:text-base",
                            children: "Get the latest AI news, learn must-know AI tools, and keep up with tech news just 3 minutes a day. Join 1+ million readers growing their careers with the Deep Decrypt AI newsletter."
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            className: "flex flex-col gap-2 w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "email",
                                    placeholder: "Enter your email",
                                    className: "rounded px-3 py-2 border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-primary text-black"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 51,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Button"], {
                                    type: "submit",
                                    className: "w-full bg-primary text-white font-semibold",
                                    children: "Subscribe"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 56,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "w-full bg-gradient-to-r from-zinc-900 to-zinc-800 py-8 px-4 md:py-16 md:px-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "container mx-auto max-w-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl md:text-2xl font-bold mb-6 text-white",
                            children: "Latest Posts"
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-4",
                            children: posts && posts.length > 0 ? posts.map((post)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                                    className: "flex flex-col border-zinc-800 bg-zinc-950 text-white hover:bg-zinc-900/50 transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["CardHeader"], {
                                        className: "flex flex-row items-start gap-4 p-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Avatar"], {
                                                className: "h-10 w-10",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AvatarImage"], {
                                                        src: "/avatar.png",
                                                        alt: "Deep Decrypt"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 71,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$avatar$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["AvatarFallback"], {
                                                        children: "DD"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 72,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 70,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 mb-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "font-bold",
                                                                children: "Deep Decrypt"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 76,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-zinc-400 text-sm",
                                                                children: "·"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 77,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-zinc-400 text-sm",
                                                                children: new Date(post.createdAt).toLocaleDateString('en-US', {
                                                                    year: 'numeric',
                                                                    month: 'long',
                                                                    day: 'numeric'
                                                                })
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 78,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 75,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                        href: `/blog/${post.Slug}`,
                                                        className: "block",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                                className: "text-lg font-semibold mb-2 hover:text-primary transition-colors",
                                                                children: post.Title
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 87,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                className: "text-zinc-200 text-sm line-clamp-3 mb-3",
                                                                children: [
                                                                    getPlainText(post.Content).slice(0, 180),
                                                                    "..."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 90,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 86,
                                                        columnNumber: 23
                                                    }, this),
                                                    post.Thumbnail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "rounded-xl overflow-hidden mb-3",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: `${("TURBOPACK compile-time value", "http://localhost:1337")}${post.Thumbnail.url}`,
                                                            alt: post.Title,
                                                            className: "object-cover w-full h-48"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/page.tsx",
                                                            lineNumber: 96,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 95,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-6 text-zinc-400",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "flex items-center gap-2 hover:text-primary transition-colors",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                                                        className: "h-5 w-5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 105,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm",
                                                                        children: "Comment"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 106,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 104,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "flex items-center gap-2 hover:text-red-500 transition-colors",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                                        className: "h-5 w-5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 109,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm",
                                                                        children: "Like"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 110,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 108,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "flex items-center gap-2 hover:text-primary transition-colors",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Share2$3e$__["Share2"], {
                                                                        className: "h-5 w-5"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 113,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-sm",
                                                                        children: "Share"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/page.tsx",
                                                                        lineNumber: 114,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 112,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "flex items-center gap-2 hover:text-primary transition-colors ml-auto",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__Bookmark$3e$__["Bookmark"], {
                                                                    className: "h-5 w-5"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/page.tsx",
                                                                    lineNumber: 117,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/page.tsx",
                                                                lineNumber: 116,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/page.tsx",
                                                        lineNumber: 103,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/page.tsx",
                                                lineNumber: 74,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/page.tsx",
                                        lineNumber: 69,
                                        columnNumber: 19
                                    }, this)
                                }, post.id, false, {
                                    fileName: "[project]/src/app/page.tsx",
                                    lineNumber: 68,
                                    columnNumber: 17
                                }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-zinc-400",
                                children: "No posts found. Please check back later for new content."
                            }, void 0, false, {
                                fileName: "[project]/src/app/page.tsx",
                                lineNumber: 125,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/app/page.tsx",
                            lineNumber: 65,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/page.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/page.tsx",
                lineNumber: 62,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 42,
        columnNumber: 5
    }, this);
}
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript, Next.js server utility)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript)"));}}),
"[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript)"));
}}),
"[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript)"));
}}),
"[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript)"));
}}),
"[project]/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "hasA11yProp": (()=>hasA11yProp),
    "mergeClasses": (()=>mergeClasses),
    "toCamelCase": (()=>toCamelCase),
    "toKebabCase": (()=>toKebabCase),
    "toPascalCase": (()=>toPascalCase)
});
const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string)=>string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2)=>p2 ? p2.toUpperCase() : p1.toLowerCase());
const toPascalCase = (string)=>{
    const camelCase = toCamelCase(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
const hasA11yProp = (props)=>{
    for(const prop in props){
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
            return true;
        }
    }
};
;
 //# sourceMappingURL=utils.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": (()=>defaultAttributes)
});
var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
 //# sourceMappingURL=defaultAttributes.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/Icon.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": (()=>Icon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/defaultAttributes.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-rsc] (ecmascript)");
;
;
;
const Icon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ color = "currentColor", size = 24, strokeWidth = 2, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])("svg", {
        ref,
        ...__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$defaultAttributes$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"],
        width: size,
        height: size,
        stroke: color,
        strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeClasses"])("lucide", className),
        ...!children && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["hasA11yProp"])(rest) && {
            "aria-hidden": "true"
        },
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]));
;
 //# sourceMappingURL=Icon.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "default": (()=>createLucideIcon)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/shared/src/utils.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/Icon.js [app-rsc] (ecmascript)");
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createElement"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$Icon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
            ref,
            iconNode,
            className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["mergeClasses"])(`lucide-${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toKebabCase"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName))}`, `lucide-${iconName}`, className),
            ...props
        }));
    Component.displayName = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$shared$2f$src$2f$utils$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["toPascalCase"])(iconName);
    return Component;
};
;
 //# sourceMappingURL=createLucideIcon.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>Heart)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
            key: "c3ymky"
        }
    ]
];
const Heart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("heart", __iconNode);
;
 //# sourceMappingURL=heart.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-rsc] (ecmascript) <export default as Heart>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Heart": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-rsc] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>MessageCircle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z",
            key: "vv11sd"
        }
    ]
];
const MessageCircle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("message-circle", __iconNode);
;
 //# sourceMappingURL=message-circle.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-rsc] (ecmascript) <export default as MessageCircle>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "MessageCircle": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-rsc] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>Share2)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)");
;
const __iconNode = [
    [
        "circle",
        {
            cx: "18",
            cy: "5",
            r: "3",
            key: "gq8acd"
        }
    ],
    [
        "circle",
        {
            cx: "6",
            cy: "12",
            r: "3",
            key: "w7nqdw"
        }
    ],
    [
        "circle",
        {
            cx: "18",
            cy: "19",
            r: "3",
            key: "1xt0gg"
        }
    ],
    [
        "line",
        {
            x1: "8.59",
            x2: "15.42",
            y1: "13.51",
            y2: "17.49",
            key: "47mynk"
        }
    ],
    [
        "line",
        {
            x1: "15.41",
            x2: "8.59",
            y1: "6.51",
            y2: "10.49",
            key: "1n3mei"
        }
    ]
];
const Share2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("share-2", __iconNode);
;
 //# sourceMappingURL=share-2.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-rsc] (ecmascript) <export default as Share2>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Share2": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$share$2d$2$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/share-2.js [app-rsc] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/bookmark.js [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.510.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>Bookmark)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-rsc] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",
            key: "1fy3hk"
        }
    ]
];
const Bookmark = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])("bookmark", __iconNode);
;
 //# sourceMappingURL=bookmark.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/bookmark.js [app-rsc] (ecmascript) <export default as Bookmark>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Bookmark": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$bookmark$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/bookmark.js [app-rsc] (ecmascript)");
}}),
"[project]/node_modules/next/dist/esm/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else {
                "TURBOPACK unreachable";
            }
        } else {
            "TURBOPACK unreachable";
        }
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript, Next.js server utility)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript)"));}}),
"[project]/node_modules/next/dist/client/components/error-boundary.js [app-rsc] (ecmascript, Next.js server utility)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/client/components/error-boundary.js [app-rsc] (ecmascript)"));}}),
"[project]/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility) <module evaluation>": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript) <module evaluation>"));}}),
"[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/page { METADATA_0 => \"[project]/src/app/favicon.ico.mjs { IMAGE => \\\"[project]/src/app/favicon.ico (static in ecmascript)\\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)\", MODULE_1 => \"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_2 => \"[project]/src/app/loading.tsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_3 => \"[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_4 => \"[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_5 => \"[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_6 => \"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component)\" } [app-rsc] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "__next_app__": (()=>__next_app__),
    "pages": (()=>pages),
    "routeModule": (()=>routeModule),
    "tree": (()=>tree)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_context__.i('[project]/src/app/favicon.ico.mjs { IMAGE => "[project]/src/app/favicon.ico (static in ecmascript)" } [app-rsc] (structured image object, ecmascript, Next.js server component)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_context__.i("[project]/src/app/loading.tsx [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_context__.i("[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$module$2e$compiled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$error$2d$boundary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/error-boundary.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility) <module evaluation>");
;
;
;
;
;
;
;
;
;
;
// We inject the tree and pages here so that we can use them in the route
// module.
const tree = [
    "",
    {
        "children": [
            "__PAGE__",
            {},
            {
                metadata: {},
                "page": [
                    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__,
                    "[project]/src/app/page.tsx"
                ]
            }
        ]
    },
    {
        metadata: {
            icon: [
                async (props)=>[
                        {
                            url: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["fillMetadataSegment"])("//", await props.params, "favicon.ico") + `?${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29$__["default"].src.split("/").splice(-1)[0]}`,
                            sizes: `${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29$__["default"].width}x${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29$__["default"].height}`,
                            type: `image/x-icon`
                        }
                    ]
            ]
        },
        "layout": [
            ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__,
            "[project]/src/app/layout.tsx"
        ],
        "loading": [
            ()=>__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__,
            "[project]/src/app/loading.tsx"
        ],
        "not-found": [
            ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__,
            "[project]/node_modules/next/dist/client/components/not-found-error.js"
        ],
        "forbidden": [
            ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__,
            "[project]/node_modules/next/dist/client/components/forbidden-error.js"
        ],
        "unauthorized": [
            ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__,
            "[project]/node_modules/next/dist/client/components/unauthorized-error.js"
        ]
    }
];
const pages = [
    "[project]/src/app/page.tsx"
];
;
;
const __next_app_require__ = __turbopack_context__.r;
const __next_app_load_chunk__ = __turbopack_context__.l;
const __next_app__ = {
    require: __next_app_require__,
    loadChunk: __next_app_load_chunk__
};
;
const routeModule = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$module$2e$compiled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AppPageRouteModule"]({
    definition: {
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RouteKind"].APP_PAGE,
        page: "/page",
        pathname: "/",
        // The following aren't used in production.
        bundlePath: '',
        filename: '',
        appPaths: []
    },
    userland: {
        loaderTree: tree
    }
}); //# sourceMappingURL=app-page.js.map
}}),
"[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/page { METADATA_0 => \"[project]/src/app/favicon.ico.mjs { IMAGE => \\\"[project]/src/app/favicon.ico (static in ecmascript)\\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)\", MODULE_1 => \"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_2 => \"[project]/src/app/loading.tsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_3 => \"[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_4 => \"[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_5 => \"[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_6 => \"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component)\" } [app-rsc] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$lib$2f$metadata$2f$get$2d$metadata$2d$route$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/lib/metadata/get-metadata-route.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_context__.i('[project]/src/app/favicon.ico.mjs { IMAGE => "[project]/src/app/favicon.ico (static in ecmascript)" } [app-rsc] (structured image object, ecmascript, Next.js server component)');
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_context__.i("[project]/src/app/loading.tsx [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29$__ = __turbopack_context__.i("[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$module$2e$compiled$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$route$2d$kind$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/route-kind.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$error$2d$boundary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/error-boundary.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/page { METADATA_0 => "[project]/src/app/favicon.ico.mjs { IMAGE => \\"[project]/src/app/favicon.ico (static in ecmascript)\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)", MODULE_1 => "[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)", MODULE_2 => "[project]/src/app/loading.tsx [app-rsc] (ecmascript, Next.js server component)", MODULE_3 => "[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_4 => "[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_5 => "[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_6 => "[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component)" } [app-rsc] (ecmascript) <locals>');
}}),
"[project]/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript)"));}}),
"[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/page { METADATA_0 => \"[project]/src/app/favicon.ico.mjs { IMAGE => \\\"[project]/src/app/favicon.ico (static in ecmascript)\\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)\", MODULE_1 => \"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_2 => \"[project]/src/app/loading.tsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_3 => \"[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_4 => \"[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_5 => \"[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_6 => \"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component)\" } [app-rsc] (ecmascript) <exports>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ClientPageRoot": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["ClientPageRoot"]),
    "ClientSegmentRoot": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["ClientSegmentRoot"]),
    "GlobalError": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$error$2d$boundary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["default"]),
    "HTTPAccessFallbackBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["HTTPAccessFallbackBoundary"]),
    "LayoutRouter": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["LayoutRouter"]),
    "MetadataBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["MetadataBoundary"]),
    "OutletBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["OutletBoundary"]),
    "Postpone": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["Postpone"]),
    "RenderFromTemplateContext": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["RenderFromTemplateContext"]),
    "ViewportBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["ViewportBoundary"]),
    "__next_app__": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["__next_app__"]),
    "actionAsyncStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["actionAsyncStorage"]),
    "collectSegmentData": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["collectSegmentData"]),
    "createMetadataComponents": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createMetadataComponents"]),
    "createPrerenderParamsForClientSegment": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createPrerenderParamsForClientSegment"]),
    "createPrerenderSearchParamsForClientPage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createPrerenderSearchParamsForClientPage"]),
    "createServerParamsForServerSegment": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createServerParamsForServerSegment"]),
    "createServerSearchParamsForServerPage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createServerSearchParamsForServerPage"]),
    "createTemporaryReferenceSet": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["createTemporaryReferenceSet"]),
    "decodeAction": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["decodeAction"]),
    "decodeFormState": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["decodeFormState"]),
    "decodeReply": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["decodeReply"]),
    "pages": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["pages"]),
    "patchFetch": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["patchFetch"]),
    "preconnect": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["preconnect"]),
    "preloadFont": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["preloadFont"]),
    "preloadStyle": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["preloadStyle"]),
    "prerender": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["prerender"]),
    "renderToReadableStream": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["renderToReadableStream"]),
    "routeModule": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["routeModule"]),
    "serverHooks": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["serverHooks"]),
    "taintObjectReference": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["taintObjectReference"]),
    "tree": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["tree"]),
    "workAsyncStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["workAsyncStorage"]),
    "workUnitAsyncStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__["workUnitAsyncStorage"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$error$2d$boundary$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/components/error-boundary.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$server$2f$app$2d$render$2f$entry$2d$base$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__utility$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/esm/server/app-render/entry-base.js [app-rsc] (ecmascript, Next.js server utility)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/page { METADATA_0 => "[project]/src/app/favicon.ico.mjs { IMAGE => \\"[project]/src/app/favicon.ico (static in ecmascript)\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)", MODULE_1 => "[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)", MODULE_2 => "[project]/src/app/loading.tsx [app-rsc] (ecmascript, Next.js server component)", MODULE_3 => "[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_4 => "[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_5 => "[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_6 => "[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component)" } [app-rsc] (ecmascript) <locals>');
}}),
"[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/page { METADATA_0 => \"[project]/src/app/favicon.ico.mjs { IMAGE => \\\"[project]/src/app/favicon.ico (static in ecmascript)\\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)\", MODULE_1 => \"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_2 => \"[project]/src/app/loading.tsx [app-rsc] (ecmascript, Next.js server component)\", MODULE_3 => \"[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_4 => \"[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_5 => \"[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)\", MODULE_6 => \"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component)\" } [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "ClientPageRoot": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ClientPageRoot"]),
    "ClientSegmentRoot": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ClientSegmentRoot"]),
    "GlobalError": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["GlobalError"]),
    "HTTPAccessFallbackBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["HTTPAccessFallbackBoundary"]),
    "LayoutRouter": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["LayoutRouter"]),
    "MetadataBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["MetadataBoundary"]),
    "OutletBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["OutletBoundary"]),
    "Postpone": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["Postpone"]),
    "RenderFromTemplateContext": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["RenderFromTemplateContext"]),
    "ViewportBoundary": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["ViewportBoundary"]),
    "__next_app__": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["__next_app__"]),
    "actionAsyncStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["actionAsyncStorage"]),
    "collectSegmentData": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["collectSegmentData"]),
    "createMetadataComponents": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createMetadataComponents"]),
    "createPrerenderParamsForClientSegment": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createPrerenderParamsForClientSegment"]),
    "createPrerenderSearchParamsForClientPage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createPrerenderSearchParamsForClientPage"]),
    "createServerParamsForServerSegment": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createServerParamsForServerSegment"]),
    "createServerSearchParamsForServerPage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createServerSearchParamsForServerPage"]),
    "createTemporaryReferenceSet": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["createTemporaryReferenceSet"]),
    "decodeAction": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["decodeAction"]),
    "decodeFormState": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["decodeFormState"]),
    "decodeReply": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["decodeReply"]),
    "pages": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["pages"]),
    "patchFetch": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["patchFetch"]),
    "preconnect": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["preconnect"]),
    "preloadFont": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["preloadFont"]),
    "preloadStyle": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["preloadStyle"]),
    "prerender": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["prerender"]),
    "renderToReadableStream": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["renderToReadableStream"]),
    "routeModule": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["routeModule"]),
    "serverHooks": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["serverHooks"]),
    "taintObjectReference": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["taintObjectReference"]),
    "tree": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["tree"]),
    "workAsyncStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["workAsyncStorage"]),
    "workUnitAsyncStorage": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__["workUnitAsyncStorage"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i('[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/page { METADATA_0 => "[project]/src/app/favicon.ico.mjs { IMAGE => \\"[project]/src/app/favicon.ico (static in ecmascript)\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)", MODULE_1 => "[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)", MODULE_2 => "[project]/src/app/loading.tsx [app-rsc] (ecmascript, Next.js server component)", MODULE_3 => "[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_4 => "[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_5 => "[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_6 => "[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component)" } [app-rsc] (ecmascript) <module evaluation>');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$esm$2f$build$2f$templates$2f$app$2d$page$2e$js$3f$page$3d2f$page__$7b$__METADATA_0__$3d3e$__$225b$project$5d2f$src$2f$app$2f$favicon$2e$ico$2e$mjs__$7b$__IMAGE__$3d3e$__$5c225b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$295c22$__$7d$__$5b$app$2d$rsc$5d$__$28$structured__image__object$2c$__ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_1__$3d3e$__$225b$project$5d2f$src$2f$app$2f$layout$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_2__$3d3e$__$225b$project$5d2f$src$2f$app$2f$loading$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_3__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$not$2d$found$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_4__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$forbidden$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_5__$3d3e$__$225b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$unauthorized$2d$error$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$29222c$__MODULE_6__$3d3e$__$225b$project$5d2f$src$2f$app$2f$page$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$2c$__Next$2e$js__server__component$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$exports$3e$__ = __turbopack_context__.i('[project]/node_modules/next/dist/esm/build/templates/app-page.js?page=/page { METADATA_0 => "[project]/src/app/favicon.ico.mjs { IMAGE => \\"[project]/src/app/favicon.ico (static in ecmascript)\\" } [app-rsc] (structured image object, ecmascript, Next.js server component)", MODULE_1 => "[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)", MODULE_2 => "[project]/src/app/loading.tsx [app-rsc] (ecmascript, Next.js server component)", MODULE_3 => "[project]/node_modules/next/dist/client/components/not-found-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_4 => "[project]/node_modules/next/dist/client/components/forbidden-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_5 => "[project]/node_modules/next/dist/client/components/unauthorized-error.js [app-rsc] (ecmascript, Next.js server component)", MODULE_6 => "[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component)" } [app-rsc] (ecmascript) <exports>');
}}),

};

//# sourceMappingURL=_be4bf03e._.js.map