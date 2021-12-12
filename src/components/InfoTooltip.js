import PopupWithForm from './PopupWithForm';
import accepted from '../images/reg-accepted.svg';
import rejected from '../images/reg-rejected.svg';

function InfoTooltip(props) {
  return (
    <PopupWithForm
      name={props.name}
      image={props.name === 'accepted' ? accepted : rejected}
      title={
        props.name === 'accepted'
          ? 'Вы успешно зарегистрировались!'
          : 'Что-то пошло не так! Попробуйте ещё раз.'
      }
      titleModifier=" form__title_type_notice"
      disabled=" form__element-disabled"
      buttonTitle=""
      buttonState={false}
      isOpen={props.isOpen}
      onSubmit={null}
      onClose={props.onClose}
    >
    </PopupWithForm>
  );
}

export default InfoTooltip;
