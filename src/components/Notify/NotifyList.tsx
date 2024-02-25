
import { FC } from 'react';


interface NotifyListProps{
    position: 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left';
}


const NotifyList: FC<NotifyListProps> = ({}) => {
    return (
        <div>NotifyList</div>
    )
}

export default NotifyList;