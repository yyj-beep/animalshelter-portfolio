import { useLocation } from "react-router-dom";
import menuData from "../data/menu.json";

type BannerItem = {
  icon: string;
  title: string;
  content: string;
  bgImage?: string;
  to: string;
};

const useBannerData = ():BannerItem => {
    const { pathname } = useLocation();
    
    for(const menu of menuData){
    const found = menu.menus.find(m => m.to === pathname);
        if (found) return {
            ...found,
            bgImage:found.bgImage || ""
        };
    }

    return {icon:"", title:"404 NOT FOUND", content:"", bgImage:"", to:""};
}

export default useBannerData;