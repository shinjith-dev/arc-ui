import { sarpanch } from '@/lib/fonts'
import { TCategory } from '@/lib/types'
import Image from 'next/image'

type Props = {
  category: TCategory
}

export default function Category({ category }: Props) {
  return (
    <div className="space-y-2 text-center">
      <div className="relative h-32 w-28 border border-fg rounded-xl">
        <Image src={category.image} alt={category.name} fill className="object-cover rounded-xl" />
      </div>

      <p className={`${sarpanch.className} max-w-20 uppercase mx-auto text-base leading-tight`}>{category.name}</p>
    </div>
  )
}
