import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
// import db from "@/db/db"
import { formatCurrency, formatNumber } from "@/lib/formatters"

// async function getSalesData() {
//   const data = await db.order.aggregate({
//     _sum: { pricePaidInCents: true },
//     _count: true,
//   })

//   return {
//     amount: (data._sum.pricePaidInCents || 0) / 100,
//     numberOfSales: data._count,
//   }
// }

// async function getUserData() {
//   const [userCount, orderData] = await Promise.all([
//     db.user.count(),
//     db.order.aggregate({
//       _sum: { pricePaidInCents: true },
//     }),
//   ])

//   return {
//     userCount,
//     averageValuePerUser:
//       userCount === 0
//         ? 0
//         : (orderData._sum.pricePaidInCents || 0) / userCount / 100,
//   }
// }

// async function getProductData() {
//   const [activeCount, inactiveCount] = await Promise.all([
//     db.product.count({ where: { isAvailableForPurchase: true } }),
//     db.product.count({ where: { isAvailableForPurchase: false } }),
//   ])

//   return { activeCount, inactiveCount }
// }

export default async function AdminDashboard() {
  // const [salesData, userData, productData] = await Promise.all([
  //   getSalesData(),
  //   getUserData(),
  //   getProductData(),
  // ])

  return (
    <div className="grid grid-cols-1 md:container md:grid-cols-2 lg:grid-cols-3 gap-4">
      <DashboardCard
        title="Sales"
        subtitle={`${formatNumber(20)} Orders`}
        body={formatCurrency(44)}
      />
      <DashboardCard
        title="Customers"
        subtitle={`${formatCurrency(
          345
        )} Average Value`}
        body={formatNumber(545)}
      />
      <DashboardCard
        title="Active Products"
        subtitle={`${formatNumber(454)} Inactive`}
        body={formatNumber(4)}
      />
    </div>
  )
}

type DashboardCardProps = {
  title: string
  subtitle: string
  body: string
}

function DashboardCard({ title, subtitle, body }: DashboardCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{subtitle}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>{body}</p>
      </CardContent>
    </Card>
  )
}
