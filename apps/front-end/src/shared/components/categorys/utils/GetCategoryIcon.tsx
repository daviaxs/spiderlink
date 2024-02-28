import Image from 'next/image'

import wine from '@/shared/assets/imgs/categories-images/wine.png'
import liquor from '@/shared/assets/imgs/categories-images/liquor.png'
import juices from '@/shared/assets/imgs/categories-images/juices.png'
import feijoada from '@/shared/assets/imgs/categories-images/feijoada.png'
import burger from '@/shared/assets/imgs/categories-images/burger.png'
import pizza from '@/shared/assets/imgs/categories-images/pizza.png'
import esfiha from '@/shared/assets/imgs/categories-images/esfiha.png'
import mirtilo from '@/shared/assets/imgs/categories-images/mirtilo.png'
import croissant from '@/shared/assets/imgs/categories-images/croissant.png'
import coffee from '@/shared/assets/imgs/categories-images/grao-de-cafe.png'
import healthy from '@/shared/assets/imgs/categories-images/dieta.png'
import sushi from '@/shared/assets/imgs/categories-images/sushi.png'
import chinese from '@/shared/assets/imgs/categories-images/comida-chinesa.png'
import cake from '@/shared/assets/imgs/categories-images/bolo.png'
import italian from '@/shared/assets/imgs/categories-images/spaguetti.png'
import iceCream from '@/shared/assets/imgs/categories-images/ice-cream.png'
import churros from '@/shared/assets/imgs/categories-images/churros.png'
import pastel from '@/shared/assets/imgs/categories-images/sopro.png'
import { CategoryNames } from '@/categoryNames'

const CategoryIcons = {
  Vinhos: (
    <Image
      src={wine}
      alt="Imagem-Vinho"
      width={35}
      height={35}
      draggable={false}
    />
  ),
  Bebidas: (
    <Image
      src={liquor}
      alt="Imagem-Bebidas"
      width={35}
      height={35}
      draggable={false}
    />
  ),
  Sucos: (
    <Image
      src={juices}
      alt="Imagem-Sucos"
      width={35}
      height={35}
      draggable={false}
    />
  ),
  Brasileira: (
    <Image
      src={feijoada}
      alt="Imagem-Feijoada"
      width={35}
      height={35}
      draggable={false}
    />
  ),
  Lanches: (
    <Image
      src={burger}
      alt="Imagem-Lanches"
      width={35}
      height={35}
      draggable={false}
    />
  ),
  Pizza: (
    <Image
      src={pizza}
      alt="Imagem-Pizza"
      width={35}
      height={35}
      draggable={false}
    />
  ),
  Esfiha: (
    <Image
      src={esfiha}
      alt="Imagem-Esfiha"
      width={35}
      height={35}
      draggable={false}
    />
  ),
  Açai: (
    <Image
      src={mirtilo}
      alt="Imagem-Açai"
      width={35}
      height={35}
      draggable={false}
    />
  ),
  Francesa: (
    <Image
      src={croissant}
      alt="Imagem-Francesa"
      width={35}
      height={35}
      draggable={false}
    />
  ),
  Café: (
    <Image
      src={coffee}
      alt="Imagem-Café"
      width={35}
      height={35}
      draggable={false}
    />
  ),
  Saudável: (
    <Image
      src={healthy}
      alt="Imagem-Saudável"
      width={35}
      height={35}
      draggable={false}
    />
  ),
  Japonesa: (
    <Image
      src={sushi}
      alt="Imagem-Japonesa"
      width={35}
      height={35}
      draggable={false}
    />
  ),
  Chinesa: (
    <Image
      src={chinese}
      alt="Imagem-Chinesa"
      width={35}
      height={35}
      draggable={false}
    />
  ),
  Doces: (
    <Image
      src={cake}
      alt="Imagem-Doces"
      width={35}
      height={35}
      draggable={false}
    />
  ),
  Italiana: (
    <Image
      src={italian}
      alt="Imagem-Italiana"
      width={35}
      height={35}
      draggable={false}
    />
  ),
  Sorvetes: (
    <Image
      src={iceCream}
      alt="Imagem-Sorvetes"
      width={35}
      height={35}
      draggable={false}
    />
  ),
  Churros: (
    <Image
      src={churros}
      alt="Imagem-Churros"
      width={35}
      height={35}
      draggable={false}
    />
  ),
  Pastel: (
    <Image
      src={pastel}
      alt="Imagem-Pastel"
      width={35}
      height={35}
      draggable={false}
    />
  ),
}

export const getCategoryIcon = (type: CategoryNames) => CategoryIcons[type]
