import { useForm, Controller } from "react-hook-form";

function FormAddress() {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div style={{ marginTop: "40px" }}>
      <form className="row g-3" onSubmit={handleSubmit(onSubmit)}>
        <div className="col-md-6">
          <Controller
            name="name"
            control={control}
            rules={{ required: "Name is required" }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className="form-control"
                placeholder="Your Name"
              />
            )}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div className="col-md-6">
          <Controller
            name="email"
            control={control}
            rules={{ required: "Email is required", pattern: /^\S+@\S+$/i }}
            render={({ field }) => (
              <input
                {...field}
                type="email"
                className="form-control"
                placeholder="Your Email"
              />
            )}
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className="col-md-12" style={{ marginTop: "30px" }}>
          <Controller
            name="subject"
            control={control}
            rules={{ required: "Subject is required" }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className="form-control"
                placeholder="Subject"
              />
            )}
          />
          {errors.subject && <p>{errors.subject.message}</p>}
        </div>
        <div className="col-md-12" style={{ marginTop: "30px" }}>
          <Controller
            name="message"
            control={control}
            rules={{ required: "Message is required" }}
            render={({ field }) => (
              <input
                {...field}
                type="text"
                className="form-control"
                placeholder="Message"
                style={{
                  paddingBottom: "70px",
                }}
              />
            )}
          />
          {errors.message && <p>{errors.message.message}</p>}
        </div>
        <div style={{ paddingLeft: "30%", marginTop: "20px" }}>
          <button
            type="submit"
            className="btn btn-dark nav-item text-light border border-warning rounded-pill"
            style={{ backgroundColor: "#FFC72C" }}
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}

export default FormAddress;
