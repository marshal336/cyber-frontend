import React from "react"
import { Metadata } from "next"
import One from "@/components/Payment/Step-one"

export const metadata: Metadata = {
    title: 'Payment | Step One'
}

export default async function StepOne() {
    return <One />
}
