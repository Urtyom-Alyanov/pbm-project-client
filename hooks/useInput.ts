import { ChangeEventHandler, useState } from "react";

export interface UseInputHookProps {
    type: "number" | "password" | "checkbox" | "text";
    initValue: number | string | boolean;
    name?: string;
};

export const useInput = (props: UseInputHookProps) => {
    const { type, initValue, name } = props;
    const [value, setValue] = useState(initValue);

    const onChange: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (ev) => {
        if(type === "number" || typeof value === "number")
            setValue(Number(ev.currentTarget.value));
        else
            setValue(String(ev.currentTarget.value));
    };

    return {
        propsInput: {
            onChange,
            value: String(value),
            name,
            type,
            className: "input"
        },
        propsTextArea: {
            onChange,
            value: String(value),
            name,
            className: "input"
        },
        callback: {
            value,
            setValue,
            ...props
        }
    };
};