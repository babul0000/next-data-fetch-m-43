🚀 1️⃣ SSR (Server Side Rendering)
🧠 কী?

প্রতিবার request আসলে server নতুন করে page বানায়।

💻 Example:
const res = await fetch(url, { cache: "no-store" });
🎯 কেন ব্যবহার করি?
সবসময় fresh data দরকার হলে
user-specific data (login, dashboard)
📍 কোথায় use হয়?
Dashboard
Profile page
Live data system

👉 Example: Facebook feed

⚡ 2️⃣ CSR (Client Side Rendering)
🧠 কী?

Browser (client) এ data load হয়।

💻 Example:
useEffect(() => {
  fetch("/api/data")
    .then(res => res.json())
    .then(data => setData(data));
}, []);
🎯 কেন ব্যবহার করি?
page load পরে data আনতে
interactive UI এর জন্য
📍 কোথায় use হয়?
React apps
Dashboard widgets
Search results

👉 Example: YouTube comments load

⚡ 3️⃣ SSG (Static Site Generation)
🧠 কী?

Build time এ page তৈরি হয়ে যায়।

💻 Example:
const res = await fetch(url, {
  cache: "force-cache"
});
🎯 কেন ব্যবহার করি?
fastest performance
SEO friendly
📍 কোথায় use হয়?
Blog
Product list
Marketing site

👉 Example: News article (rarely changes)

🔄 4️⃣ ISR (Incremental Static Regeneration)
🧠 কী?

SSG + update system

💻 Example:
fetch(url, {
  next: { revalidate: 10 }
});
🎯 কেন ব্যবহার করি?
static speed + dynamic update
📍 কোথায় use হয়?
E-commerce products
News websites

👉 Example:
Product price update every 10 sec

🧩 5️⃣ generateStaticParams()
🧠 কী?

Dynamic routes build time এ আগে থেকে generate করে।

💻 Example:
export async function generateStaticParams() {
  const res = await fetch("http://localhost:5000/products");
  const data = await res.json();

  return data.map((item) => ({
    itemId: item.id.toString(),
  }));
}
🎯 কেন ব্যবহার করি?
dynamic page fast করতে
SEO improve করতে
📍 কোথায় use হয়?
/products/[id]
/blog/[slug]

👉 Example:
আগে থেকেই /product/1, /product/2 বানিয়ে রাখা

🧠 সহজ করে মনে রাখো:
Concept	কেন ব্যবহার করি
SSR	সবসময় fresh data
CSR	client side interactive UI
SSG	fastest static page
ISR	static + auto update
generateStaticParams	dynamic route pre-build
🎯 Real Example (তোমার প্রজেক্ট অনুযায়ী)

👉 তুমি যে project বানিয়েছো:

/products → SSG / ISR (product list)
/products/[id] → generateStaticParams + SSR
Navbar / UI → CSR (React side)
🔥 One Line Summary:

👉 SSR = সবসময় fresh
👉 CSR = browser handle করে
👉 SSG = build time fast page
👉 ISR = মাঝে মাঝে update
👉 generateStaticParams = dynamic route আগে থেকে বানানো
