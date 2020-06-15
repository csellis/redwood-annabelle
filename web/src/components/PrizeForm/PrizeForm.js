import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  Submit,
} from '@redwoodjs/web'

const PrizeForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.prize?.id)
  }

  return (
    <div className="rw-form-wrapper">
      <Form onSubmit={onSubmit} error={props.error}>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="name"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Name
        </Label>
        <TextField
          name="name"
          defaultValue={props.prize?.name}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="name" className="rw-field-error" />

        <Label
          name="imageUrl"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Image url
        </Label>
        <TextField
          name="imageUrl"
          defaultValue={props.prize?.imageUrl}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="imageUrl" className="rw-field-error" />

        <Label
          name="lessonsNeeded"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Lessons needed
        </Label>
        <TextField
          name="lessonsNeeded"
          defaultValue={props.prize?.lessonsNeeded}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="lessonsNeeded" className="rw-field-error" />

        <Label
          name="lessonsCompleted"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Lessons completed
        </Label>
        <TextField
          name="lessonsCompleted"
          defaultValue={props.prize?.lessonsCompleted}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />
        <FieldError name="lessonsCompleted" className="rw-field-error" />

        <div className="rw-button-group">
          <Submit
            disabled={props.loading}
            className="rw-button rw-button-blue"
          >
            Save
          </Submit>
        </div>
      </Form>
    </div>
  )
}

export default PrizeForm
