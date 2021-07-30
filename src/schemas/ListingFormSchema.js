import * as yup from 'yup';

let ListingFormSchema = yup.object().shape({
    name: yup.string().min(2).required('Listing Name is Required'),
    description: yup.string().min(2).required('Listing Description is Required'),
    cost: yup.number().min(1).required('Listing Cost is required'),
    image: yup.string().required('A Listing Image is Required'),
    tags: yup.string()
});

export default ListingFormSchema;