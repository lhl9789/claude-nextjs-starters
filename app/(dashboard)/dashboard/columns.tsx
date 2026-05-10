"use client"

import { ColumnDef } from "@tanstack/react-table"

export interface Order {
  id: string
  customer: string
  status: "완료" | "처리중" | "취소"
  amount: string
  date: string
}

const statusColor: Record<string, string> = {
  완료: "text-emerald-600",
  처리중: "text-blue-600",
  취소: "text-red-500",
}

export const columns: ColumnDef<Order>[] = [
  { accessorKey: "id", header: "주문번호" },
  { accessorKey: "customer", header: "고객명" },
  {
    accessorKey: "status",
    header: "상태",
    cell: ({ row }) => {
      const status = row.getValue("status") as string
      return <span className={statusColor[status]}>{status}</span>
    },
  },
  { accessorKey: "amount", header: "금액" },
  { accessorKey: "date", header: "날짜" },
]
