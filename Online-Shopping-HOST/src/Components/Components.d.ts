import type { Dispatch, SetStateAction } from 'react';

export type Modal_Type = {
    visible:boolean,
    title:string,
    content:HTMLElement| null,
    message:string,
    invisible:Dispatch<SetStateAction<boolean>>
}
