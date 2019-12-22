import React from "react";
import { Formik } from "formik";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { FormattedMessage, injectIntl } from "react-intl";
import {
  Checkbox,
  FormControlLabel,
  TextField,
  InputAdornment,
  FormControl,
  Button,
  OutlinedInput,
  InputLabel,
  FormHelperText
} from "@material-ui/core";
import * as auth from "../../store/ducks/auth.duck";
import { register } from "../../crud/auth.crud";
import '../../styles/register.scss'

function Registration(props) {
  const { intl } = props;

  return (
    <div className="kt-login__body">
      <div className="kt-login__form">
        <div className="kt-login__title">
          <h3>
            <FormattedMessage id="AUTH.REGISTER.TITLE" />
          </h3>
        </div>

        <Formik
          initialValues={{
            email: "",
            password: "",
            acceptTerms: true,
            confirmPassword: "",
            phone: '',
            validateCode: ''
          }}
          validate={values => {
            console.log(values)
            const errors = {};

            if (!values.email) {
              errors.email = intl.formatMessage({
                id: "AUTH.VALIDATION.REQUIRED_FIELD"
              });
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = intl.formatMessage({
                id: "AUTH.VALIDATION.INVALID_FIELD"
              });
            }

            if (!values.password) {
              errors.password = intl.formatMessage({
                id: "AUTH.VALIDATION.REQUIRED_FIELD"
              });
            }

            if (!values.confirmPassword) {
              errors.confirmPassword = intl.formatMessage({
                id: "AUTH.VALIDATION.REQUIRED_FIELD"
              });
            } else if (values.password !== values.confirmPassword) {
              errors.confirmPassword =
                "Password and Confirm Password didn't match.";
            }

            // 校验手机号码
            if(!values.phone){
              errors.phone = '请输入手机号码'
            }else if(!/^1\d{10}$/g.test(values.phone)){
              errors.phone = '请输入正确的11位手机号码'
            }

            // 校验验证码
            if(/^1\d{10}$/g.test(values.phone)&&!values.validateCode){
              errors.validateCode = '请输入验证码'
            }

            if (!values.acceptTerms) {
              errors.acceptTerms = "Accept Terms";
            }

            return errors;
          }}
          onSubmit={(values, { setStatus, setSubmitting }) => {
            register(
              values.email,
              values.password
            )
              .then(({ data: { accessToken } }) => {
                props.register(accessToken);
              })
              .catch(() => {
                setSubmitting(false);
                setStatus(
                  intl.formatMessage({
                    id: "AUTH.VALIDATION.INVALID_LOGIN"
                  })
                );
              });
          }}
        >
          {({
            values,
            status,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting
          }) => (
            <form onSubmit={handleSubmit} noValidate autoComplete="off">
              {status && (
                <div role="alert" className="alert alert-danger">
                  <div className="alert-text">{status}</div>
                </div>
              )}

              <div className="form-group mb-0">
                <TextField
                  label="邮箱"
                  margin="normal"
                  className="kt-width-full"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.email}
                  helperText={touched.email && errors.email}
                  error={Boolean(touched.email && errors.email)}
                  variant="outlined"
                />
              </div>

              <div className="form-group mb-0">
                <TextField
                  type="password"
                  margin="normal"
                  label="密码"
                  placeholder="6 - 16位密码，区分大小写"
                  className="kt-width-full"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.password}
                  helperText={touched.password && errors.password}
                  error={Boolean(touched.password && errors.password)}
                  variant="outlined"
                />
              </div>

              <div className="form-group">
                <TextField
                  type="password"
                  margin="normal"
                  label="确认密码"
                  className="kt-width-full"
                  name="confirmPassword"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.confirmPassword}
                  helperText={touched.confirmPassword && errors.confirmPassword}
                  error={Boolean(
                    touched.confirmPassword && errors.confirmPassword
                  )}
                  variant="outlined"
                />
              </div>
              
              <div className="form-group mb-0">
                <FormControl fullWidth className={'kt-width-full'}
                  error={Boolean(
                    touched.phone && errors.phone
                  )}
                  variant="outlined"
                >
                  <InputLabel htmlFor="standard-adornment-phone">手机号</InputLabel>
                  <OutlinedInput
                    id="standard-adornment-phone"
                    name="phone"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    value={values.phone}
                    startAdornment={<InputAdornment position="start">+86</InputAdornment>}
                    labelWidth={42}
                  />
                  <FormHelperText>{touched.phone && errors.phone}</FormHelperText>
                </FormControl>
              </div>

              <div className="form-group mb-0" style={{display:'flex'}}>
                <TextField
                  label="验证码"
                  margin="normal"
                  className="kt-width-full"
                  name="validateCode"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.validateCode}
                  helperText={touched.validateCode && errors.validateCode}
                  error={Boolean(touched.validateCode && errors.validateCode)}
                  variant="outlined"
                  placeholder="请输入6位数字验证码"
                />
                <Button variant="contained" color="primary" className="btn btn-primary btn-elevate kt-login__btn-primary my-reg-btn-send">
                  获取验证码
                </Button>
              </div>

              <div className="form-group mb-0">
                <FormControlLabel
                  label={
                    <>
                      我同意{" "}
                      <Link
                        to="/terms"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        协议 & 条款
                      </Link>
                    </>
                  }
                  control={
                    <Checkbox
                      color="primary"
                      name="acceptTerms"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      checked={values.acceptTerms}
                    />
                  }
                />
              </div>

              <div className="kt-login__actions">
                <Link
                  to="/auth/forgot-password"
                  className="kt-link kt-login__link-forgot"
                >
                  <FormattedMessage id="AUTH.GENERAL.FORGOT_BUTTON" />
                </Link>

                <Link to="/auth">
                  <button type="button" className="btn btn-secondary btn-elevate kt-login__btn-secondary">
                    返回
                  </button>
                </Link>

                <button
                  disabled={isSubmitting || !values.acceptTerms}
                  className="btn btn-primary btn-elevate kt-login__btn-primary"
                >
                  注册
                </button>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default injectIntl(
  connect(
    null,
    auth.actions
  )(Registration)
);
