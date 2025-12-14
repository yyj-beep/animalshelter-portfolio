import { IconType } from "react-icons";

import { IoPaw, IoPawOutline, IoHeart, IoHeartOutline, IoChatbubble, IoChatbubbleOutline } from "react-icons/io5";
import { PiCompassFill,PiCompass, PiHandHeart, PiHandHeartFill, PiWarning, PiWarningFill } from "react-icons/pi";
import { RiSeedlingFill, RiSeedlingLine,  RiCoinFill, RiCoinLine } from "react-icons/ri";
import { BsFillBookmarkHeartFill, BsBookmarkHeart } from "react-icons/bs";
import { BiPencil,BiSolidPencil } from "react-icons/bi";

const iconMap: Record<string, {default:IconType; hover:IconType}> = {
  Paw: {default:IoPawOutline, hover:IoPaw},
  Compass: {default:PiCompass, hover:PiCompassFill},
  Bookmark:{default:BsBookmarkHeart, hover:BsFillBookmarkHeartFill},
  Seed: {default:RiSeedlingLine, hover:RiSeedlingFill},
  Chat: {default:IoChatbubbleOutline, hover:IoChatbubble},
  Heart: {default:IoHeartOutline, hover:IoHeart},
  Coin: {default:RiCoinLine, hover:RiCoinFill},
  HandHeart: {default:PiHandHeart, hover:PiHandHeartFill},
  Warning: {default:PiWarning, hover:PiWarningFill},
  Pen: {default:BiPencil, hover:BiSolidPencil},
};

export default iconMap;