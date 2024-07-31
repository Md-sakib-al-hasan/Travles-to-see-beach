import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Description } from "@radix-ui/react-alert-dialog"
import Image from "next/image"

export default function CarouselSizes() {
    const [user,setuser] = React.useState([{name:'yasmin Carey','img':'https://i.ibb.co/rfjkrLZ/images.jpg','descriptions':`"i absolutl love having privilee, they have so many great venues and benefits. Having access to so many gorgeous hotel pools and beaches really makes me feel as though i am on holiday on my weekends and free time "`},{name:'yasmin Carey','img':'https://i.ibb.co/rfjkrLZ/images.jpg','descriptions':`"i absolutl love having privilee, they have so many great venues and benefits. Having access to so many gorgeous hotel pools and beaches really makes me feel as though i am on holiday on my weekends and free time "`},{name:'yasmin Carey','img':'https://i.ibb.co/rfjkrLZ/images.jpg','descriptions':`"i absolutl love having privilee, they have so many great venues and benefits. Having access to so many gorgeous hotel pools and beaches really makes me feel as though i am on holiday on my weekends and free time "`},{name:'yasmin Carey','img':'https://i.ibb.co/rfjkrLZ/images.jpg','descriptions':`"i absolutl love having privilee, they have so many great venues and benefits. Having access to so many gorgeous hotel pools and beaches really makes me feel as though i am on holiday on my weekends and free time "`}])
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-[80%] mx-auto  "
    >
      <CarouselContent className="py-10">
        {user.map((user, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <div className="h-96  relative">
                  <div>
                    <p>{user.descriptions}</p>
                  </div>
                  <div className="flex absolute bottom-0 text-center left-1/3">
                    <Image className="rounded-full absolute left-[-70px] bottom-2" width={60} height={60} src={user.img} alt="user"></Image>
                    <div className="text-center">
                        <p>Member review</p>
                        <h5 className="text-xl font-semibold">{user.name}</h5>
                        <p className="text-sm">Member since 2020</p>
                    </div>
                  </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className='absolute md:left-[500px] left-[80px] h-14 w-14  bg-gray-500 border-none  top-100 ' />
      <CarouselNext className='absolute md:right-[500px] right-[80px] h-14 w-14  bg-gray-500 border-none top-100' />
    </Carousel>
  )
}
