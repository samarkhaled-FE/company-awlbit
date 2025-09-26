import { useLanguageContext } from "@contexts/LanguageContext";
import { ErrorMessage } from "formik";

function InputField({ typeField, label, options, ...field }) {

    const { language } = useLanguageContext();

    const className = `mt-2 w-full p-2 rounded-md bg-transparent border border-gray-200 focus:border-blue-500 transition`;

    return (
        <div className="field-group">
            <label htmlFor={field.id} className="font-semibold">{label[language]}</label>
            {
                typeField === "input" ? (
                    <input
                        {...field}
                        autoComplete="off"
                        placeholder={field.placeholder[language]}
                        className={`${className} placeholder:font-medium`}
                    />
                ) : typeField === "select" ? (
                    <select
                        {...field}
                        className={`${className}`}
                    >
                        {
                            options.map((option, index) => (<option key={index} value={option.value}>
                                {option.label[language]}
                            </option>))
                        }
                    </select>
                ) : typeField === "textarea" ? (
                    <></>
                ) : null
            }
            {/* Error Message */}
            <ErrorMessage name={field.name} component={"div"} className="mt-2 text-red-500" />
        </div>
    )
}

export default InputField;