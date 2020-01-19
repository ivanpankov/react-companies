import PropTypes from 'prop-types';

export const companyPropTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  business: PropTypes.string,
  slogan: PropTypes.string
};

export const companyDefaultProps = {
  id: '',
  name: '',
  business: '',
  slogan: ''
};

export const companyProjectsPropTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  department: PropTypes.string,
  employeesId: PropTypes.arrayOf(PropTypes.string),
  companyId: PropTypes.string
};

export const companyProjectsDefaultProps = {
  id: '',
  name: '',
  department: '',
  employeesId: [],
  companyId: ''
};

export const companyAddressPropTypes = {
  id: PropTypes.string,
  city: PropTypes.string,
  country: PropTypes.string,
  street: PropTypes.string,
  state: PropTypes.string,
  companyId: PropTypes.string
};

export const companyAddressDefaultProps = {
  id: '',
  city: '',
  country: '',
  street: '',
  state: '',
  companyId: ''
};

export const companyDetailsPropTypes = {
  loading: PropTypes.bool,
  data: PropTypes.shape({
    company: PropTypes.shape(companyPropTypes),
    address: PropTypes.shape(companyAddressPropTypes),
    projects: PropTypes.shape(companyProjectsPropTypes)
  }),
  error: PropTypes.object
};

export const companyDetailsDefaultProps = {
  loading: false,
  data: {
    company: companyDefaultProps,
    address: companyAddressDefaultProps,
    projects: companyProjectsDefaultProps
  },
  error: null
};

export default function(state = companyDetailsDefaultProps, action = {}) {
  const { type, ...rest } = action;

  switch (type) {
    case 'REQUEST_COMPANY_DETAILS':
    case 'RECEIVE_COMPANY_DETAILS_SUCCESS':
    case 'RECEIVE_COMPANY_DETAILS_FAIL':
      return rest;

    default:
      return state;
  }
}
