
import AdminTopbar   from "./../../components/admin/AdminTopbar";
import StatsCards    from "./../../components/admin/StatsCards";
import RevenueChart  from "./../../components/admin/RevenueChart";
import TopSellers    from "./../../components/admin/TopSellers";
import OrdersTable   from "./../../components/admin/OrdersTable";
import ProductsTable from "./../../components/admin/ProductsTable";
import CustomerCard  from "./../../components/admin/CustomerCard";
import AdminSidebar from './../../components/admin/AdminSidebar';
import { useState } from "react";

/* ─────────────────────────────────────────────
   Static mock data — swap for real API data
───────────────────────────────────────────── */
const MOCK_STATS = { revenue: 24850, orders: 342, customers: 1204, products: 12 };

const MOCK_PRODUCTS = [
  { id:1,  name:"Monstera Deliciosa", category:"indoor",    emoji:"🌿", price:45,  oldPrice:null, inStock:true,  rating:4.8, reviews:124, description:"The iconic split-leaf plant that instantly elevates any space." },
  { id:2,  name:"Fiddle Leaf Fig",    category:"indoor",    emoji:"🌳", price:89,  oldPrice:110,  inStock:true,  rating:4.5, reviews:89,  description:"A statement piece with large, violin-shaped leaves." },
  { id:3,  name:"Lavender",           category:"medicinal", emoji:"💜", price:22,  oldPrice:null, inStock:true,  rating:4.9, reviews:203, description:"Aromatic and calming, lavender is perfect for borders." },
  { id:4,  name:"Snake Plant",        category:"indoor",    emoji:"🌱", price:35,  oldPrice:null, inStock:true,  rating:4.7, reviews:318, description:"Virtually indestructible and a top air purifier." },
  { id:5,  name:"Bird of Paradise",   category:"outdoor",   emoji:"🌺", price:120, oldPrice:null, inStock:false, rating:4.6, reviews:47,  description:"Dramatic tropical foliage that commands attention." },
  { id:6,  name:"Echeveria",          category:"succulents",emoji:"🪴", price:18,  oldPrice:null, inStock:true,  rating:4.8, reviews:156, description:"Rosette-forming succulent in jewel tones." },
  { id:7,  name:"Peace Lily",         category:"indoor",    emoji:"🌸", price:38,  oldPrice:null, inStock:true,  rating:4.6, reviews:91,  description:"Elegant white blooms with glossy dark leaves." },
  { id:8,  name:"Aloe Vera",          category:"medicinal", emoji:"🌵", price:25,  oldPrice:30,   inStock:true,  rating:4.9, reviews:445, description:"The ultimate healing plant." },
];

const MOCK_ORDERS = [
  { id:"#ORD-001", customer:"Amina Benali",  items:3, total:108, status:"delivered",  date:"2024-12-10" },
  { id:"#ORD-002", customer:"Youssef Lahlou",items:1, total:45,  status:"shipped",    date:"2024-12-11" },
  { id:"#ORD-003", customer:"Fatima Zohra",  items:5, total:234, status:"processing", date:"2024-12-12" },
  { id:"#ORD-004", customer:"Omar Tazi",     items:2, total:67,  status:"pending",    date:"2024-12-12" },
  { id:"#ORD-005", customer:"Nadia Chraibi", items:4, total:156, status:"delivered",  date:"2024-12-09" },
];

const MOCK_CUSTOMERS = MOCK_ORDERS.map(o => ({
  name:        o.customer,
  ordersCount: o.items,
  totalSpent:  o.total,
  status:      o.status,
}));

const MOCK_USER = { name: "Shaimaa", email: "admin@verdura.ma" };

/* ─────────────────────────────────────────────
   AdminPage — pure UI composition
   activeNav controls which panel is visible
───────────────────────────────────────────── */
export default function AdminPage() {
 
    const [activeNav, setActiveNav] = useState("overview");

  return (
    <div className="flex min-h-screen bg-stone-100">

      {/* 1. Fixed left sidebar */}
      <AdminSidebar activeNav={activeNav} user={MOCK_USER} />

      {/* 2. Main area (offset by sidebar width) */}
      <main className="ml-56 flex-1 flex flex-col">

        {/* 3. Sticky topbar */}
        <AdminTopbar title={activeNav} notificationCount={1} />

        {/* 4. Page content */}
        <div className="flex-1 p-8 overflow-y-auto space-y-6">

          {/* ── OVERVIEW ── */}
          {activeNav === "overview" && (
            <>
              {/* KPI row */}
              <StatsCards stats={MOCK_STATS} />

              {/* Chart + top sellers */}
              <div className="grid grid-cols-3 gap-5">
                <div className="col-span-2">
                  <RevenueChart />
                </div>
                <TopSellers products={MOCK_PRODUCTS.slice(0, 5)} />
              </div>

              {/* Recent orders */}
              <OrdersTable
                orders={MOCK_ORDERS}
                showViewAll={true}
                showFilters={false}
              />
            </>
          )}

          {/* ── PRODUCTS ── */}
          {activeNav === "products" && (
            <ProductsTable
              products={MOCK_PRODUCTS}
              searchValue=""
              categoryFilter="All categories"
            />
          )}

          {/* ── ORDERS ── */}
          {activeNav === "orders" && (
            <OrdersTable
              orders={MOCK_ORDERS}
              showViewAll={false}
              showFilters={true}
              activeFilter="All"
            />
          )}

          {/* ── CUSTOMERS ── */}
          {activeNav === "customers" && (
            <div className="grid grid-cols-2 gap-5">
              {MOCK_CUSTOMERS.map((c, i) => (
                <CustomerCard key={i} customer={c} />
              ))}
            </div>
          )}

        </div>
      </main>
    </div>
  );
}
