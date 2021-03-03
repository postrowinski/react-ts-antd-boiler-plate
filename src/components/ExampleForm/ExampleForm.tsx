import * as React from "react";
import { useFormik, FormikProps } from 'formik';
import { Button, Form, Input } from 'antd';
import * as Yup from 'yup';
import * as _ from 'lodash';
import { useIntl } from 'react-intl';
import { ExampleFormDTO } from '../../../types/rest';

const { useForm } = Form;

export const ExampleForm: React.FC<{}> = (): JSX.Element => {
    useForm();
    const { formatMessage } = useIntl();
    const formik: FormikProps<ExampleFormDTO> = useFormik<ExampleFormDTO>({
        enableReinitialize: true,
        validateOnBlur: false,
        validateOnChange: false,
        initialValues: {
            name: ''
        },
        validationSchema: Yup.object().shape({
            name: Yup.string().nullable().required(formatMessage({id: 'form.validation.required'}))
        }),
        onSubmit: (values: ExampleFormDTO): void => onSubmit(values)
    });

    function onSubmit(values: ExampleFormDTO): void {
        // tslint:disable-next-line
        console.log(values);
    }

    return (
        <Form style={{maxWidth: 400, margin: 'auto'}} onFinish={formik.handleSubmit}>
            <Form.Item
                label={formatMessage({id: 'form.example.name'})}
                required
                validateStatus={formik.errors.name ? 'error' : undefined}
                help={formik.errors.name}
            >
                <Input
                    name={'name' as keyof ExampleFormDTO}
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    placeholder={formatMessage({id: 'form.example.name'})}
                />
            </Form.Item>
            <Button
                type='primary'
                htmlType='submit'
                block
                size='large'
            >
                {formatMessage({id: 'form.example.submit'})}
            </Button>
        </Form>
    );
}

