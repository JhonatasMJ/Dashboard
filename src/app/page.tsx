import React from 'react'
import ChartOverView from '../components/chart/index'

import {DollarSign, BadgeDollarSign, Users, Percent} from "lucide-react"
import {Card, CardHeader, CardTitle, CardDescription, CardContent} from '@/components/ui/card'
import Sales from '@/components/sales'

const page = () => {
  return (
    <main className="sm:ml-14 p-4">
      <section className="grid grid-cols-2  lg:grid-cols-4 gap-4">

        <Card>  
          <CardHeader>
            <div className="flex flex-items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-600 select-none">
                Total de Vendas
              </CardTitle>
              <DollarSign className="ml-auto w-4 h-4"/>
            </div>

            <CardDescription>
              Total de Vendas em 90 dias
            </CardDescription>
          </CardHeader>

            <CardContent>
              <p className="text-base sm:text-lg font-bold">
                R$ 40.000
              </p>
            </CardContent>

        </Card>

        <Card>  
          <CardHeader>
            <div className="flex flex-items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-600">
                Novos Clientes
              </CardTitle>
              <Users className="ml-auto w-4 h-4"/>
            </div>

            <CardDescription>
              Novos clientes em 30 dias
            </CardDescription>
          </CardHeader>

            <CardContent>
              <p className="text-base sm:text-lg font-bold">
                234
              </p>
            </CardContent>

        </Card>

        <Card>  
          <CardHeader>
            <div className="flex flex-items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-600">
                Pedidos hoje
              </CardTitle>
              <Percent className="ml-auto w-4 h-4"/>
            </div>

            <CardDescription>
              Total de pedidos hoje
            </CardDescription>

          </CardHeader>
            <CardContent>
              <p className="text-base sm:text-lg font-bold">
                65
              </p>
            </CardContent>

        </Card>

        <Card>  
          <CardHeader>
            <div className="flex flex-items-center justify-center">
              <CardTitle className="text-lg sm:text-xl text-gray-600">
                Total Pedidos
              </CardTitle>
              <BadgeDollarSign className="ml-auto w-4 h-4"/>
            </div>

            <CardDescription>
              Total de Pedidos em 30 dias
            </CardDescription>
          </CardHeader>

            <CardContent>
              <p className="text-base sm:text-lg font-bold">
                98
              </p>
            </CardContent>

        </Card>

      </section>

      <section className="mt-4 flex flex-col md:flex-row gap-4">
       <ChartOverView/>
      <Sales/>
      </section> 

    </main>
  )
}

export default page
