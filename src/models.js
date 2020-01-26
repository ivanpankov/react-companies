import PropTypes from 'prop-types';

export const EmployeePropTypes = {
  id: PropTypes.string,
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  dateOfBirth: PropTypes.string,
  companyId: PropTypes.string,
  jobTitle: PropTypes.string,
  jobArea: PropTypes.string,
  jobType: PropTypes.string
};

export const EmployeeDefaultProps = {
  id: '',
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  companyId: '',
  jobTitle: '',
  jobArea: '',
  jobType: ''
};

export const CompanyPropTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  business: PropTypes.string,
  slogan: PropTypes.string
};

export const CompanyDefaultProps = {
  id: '',
  name: '',
  business: '',
  slogan: ''
};

export const AddressPropTypes = {
  id: PropTypes.string,
  city: PropTypes.string,
  country: PropTypes.string,
  street: PropTypes.string,
  state: PropTypes.string,
  companyId: PropTypes.string
};

export const AddressDefaultProps = {
  id: '',
  city: '',
  country: '',
  street: '',
  state: '',
  companyId: ''
};

export const ProjectPropTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  department: PropTypes.string,
  employeesId: PropTypes.arrayOf(PropTypes.string),
  companyId: PropTypes.string
};

export const ProjectDefaultProps = {
  id: '',
  name: '',
  department: '',
  employeesId: [],
  companyId: ''
};

export const CompanyDetailsPropTypes = {
  loading: PropTypes.bool,
  data: PropTypes.shape({
    company: PropTypes.shape(CompanyPropTypes),
    address: PropTypes.shape(AddressPropTypes),
    projects: PropTypes.arrayOf(PropTypes.shape(ProjectPropTypes)),
    employees: PropTypes.arrayOf(PropTypes.shape(EmployeePropTypes))
  }),
  error: PropTypes.object
};

export const CompanyDetailsDefaultProps = {
  loading: false,
  data: {
    company: CompanyDefaultProps,
    address: AddressDefaultProps,
    projects: [],
    employees: []
  },
  error: null
};

// --------------------------------------------------