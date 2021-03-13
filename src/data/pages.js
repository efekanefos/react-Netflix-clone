import Home from "../components/Home";
import TvSeries from "../components/TvSeries";
import Movies from "../components/Movies";
import NewPopular from "../components/NewPopular";
import MyList from "../components/MyList";

const pages = [
  {
    title: "Home",
    isExact: true,
    component: Home,
    link: "/",
    isActive: true,
  },
  {
    title: "TvSeries",
    isExact: false,
    component: TvSeries,
    link: "/tvseries",
    isActive: true,
  },
  {
    title: "Movies",
    isExact: false,
    component: Movies,
    link: "/movies",
    isActive: true,
  },
  {
    title: "NewPopular",
    isExact: false,
    component: NewPopular,
    link: "/newpopular",
    isActive: true,
  },
  {
    title: "MyList",
    isExact: false,
    component: MyList,
    link: "/mylist",
    isActive: true,
  },
];

export default pages;
