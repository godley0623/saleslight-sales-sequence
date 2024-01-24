"use client"
import React, { useEffect, useState } from 'react'
import { getSalesPrompts } from '../controller/server'

export default function SalesTable() {
    const [allSales, setAllSales]: any = useState([])
    const [sales, setSales]: any = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const token = localStorage.getItem('token')
            const email = localStorage.getItem('email')

            //@ts-ignore
            let salesPrompts = await getSalesPrompts(token, email)
            if (salesPrompts) {
                salesPrompts = salesPrompts.sales_prompts.reverse()
                setAllSales(salesPrompts)
                setSales(salesPrompts)
            }


            console.log(salesPrompts)
        }

        fetchData()
    }, [])

    const handleSearch = (e:any) => {
        const search = e.target.value

        if (!search) {
            setSales(allSales)
            return
        }

        const salesFilter = allSales.filter((sale: any) => {
            if (sale.lead_name.toLowerCase().includes(search.toLowerCase()) || sale.creation_date.includes(search)) return true
            return false
        })

        if (salesFilter.length > 0) setSales(salesFilter)
    }

    return (
        <>
        <input className='border border-black ml-2 pl-2' placeholder='Search...' onChange={(e) => handleSearch(e)}></input>
        <div className='w-full flex justify-center mt-5'>
            <table className='border border-black' bgcolor='black' width="800">
                <thead>
                    <tr className=' bg-gray-500'>
                        <th className='w-24'>Lead Name</th>
                        <th className='w-24'>Subject</th>
                        <th className='w-24'>Followups</th>
                        <th className='w-24'>Creation Date</th>
                    </tr>
                </thead>
                <tbody>
                    {sales.map((sale:any, key:any) => (
                        <tr key={key} className=' bg-gray-300 text-center'>
                            <td>{sale.lead_name}</td>
                            <td>{sale.subject}</td>
                            <td><button className='bg-primary text-white w-20 h-8 rounded-md'>Generate</button></td>
                            <td>{sale.creation_date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    )
}
