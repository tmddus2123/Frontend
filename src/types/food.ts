import Chicken from '@/assets/images/food/chicken.png';
import FastFood from '@/assets/images/food/hambuger.png';
import Korean from '@/assets/images/food/bibimbab.png';
import Chinese from '@/assets/images/food/asian.png';
import Japanese from '@/assets/images/food/sushi.png';
import Western from '@/assets/images/food/pasta.png';
import Snack from '@/assets/images/food/tteok.png';
import Night from '@/assets/images/food/night.png';
import Dessert from '@/assets/images/food/dessert.png';
import SelectedChicken from '@/assets/images/food/chicken-active.png';
import SelectedFastFood from '@/assets/images/food/hambuger-active.png';
import SelectedKorean from '@/assets/images/food/bibimbab-active.png';
import SelectedChinese from '@/assets/images/food/asian-active.png';
import SelectedJapanese from '@/assets/images/food/sushi-active.png';
import SelectedWestern from '@/assets/images/food/pasta-active.png';
import SelectedSnack from '@/assets/images/food/tteok-active.png';
import SelectedNight from '@/assets/images/food/night-active.png';
import SelectedDessert from '@/assets/images/food/dessert-active.png';

export const FOOD_TYPE = [
  { name: '치킨/피자', image: Chicken, selectedImage: SelectedChicken },
  { name: '패스트푸드', image: FastFood, selectedImage: SelectedFastFood },
  { name: '한식', image: Korean, selectedImage: SelectedKorean },
  { name: '중식·아시안', image: Chinese, selectedImage: SelectedChinese },
  { name: '일식·돈까스', image: Japanese, selectedImage: SelectedJapanese },
  { name: '양식', image: Western, selectedImage: SelectedWestern },
  { name: '분식', image: Snack, selectedImage: SelectedSnack },
  { name: '야식', image: Night, selectedImage: SelectedNight },
  { name: '카페 · 디저트', image: Dessert, selectedImage: SelectedDessert },
];
