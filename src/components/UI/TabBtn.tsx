
import {tabAction} from "@/store/tab-slice";
import {TabBtnTypes} from "@/helpers/types/MyTypes";
import {useAppDispatch} from "@/store/hooks";
import styles from './TabBtn.module.css';


export default function TabBtn (
    props: TabBtnTypes
) {
    const dispatch = useAppDispatch();
    const btnClickHandler = () => {
        dispatch(tabAction.changeTab(props.tabText));
    }

    return (
        <div className={styles.wrapper}>
            <button onClick={btnClickHandler}>
                <span>
                    <div>{props.icon}</div>
                    <div>{props.tabText}</div>
                </span>
            </button>
        </div>
    )
}