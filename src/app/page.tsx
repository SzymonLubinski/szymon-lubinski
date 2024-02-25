import styles from "../components/CV/Welcome.module.css";
import About from "@/components/CV/About";
import Projects from "@/components/CV/Projects";
import Tech from "@/components/CV/Tech";
import Cooperation from "@/components/CV/Cooperation";
import {useAppSelector} from "@/store/hooks";
import Welcome from "@/components/CV/Welcome";


export default function Home() {


    return (
        <>
            <Welcome/>
        </>
    );
}
