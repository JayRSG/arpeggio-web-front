const UploadClassLink = () => {
  return (
    <>
      <div className="flex flex-wrap overflow-hidden items-center justify-center">
        <div className="w-3/4 bg-gray-100 shadow-md rounded">
          <div className="flex flex-col justify-center px-4 py-4">
            <div className="flex flex-col justify-center">
              <h3 className="text-base font-bold pb-8">Class Link</h3>
              <input
                className="border-b-2 border-black mb-8 bg-gray-100"
                type="text"
                name="class-link"
                id=""
              />
              <a className="btn rounded-lg bg-btn-color text-xl px-8 shadow-btn self-end">
                Upload
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadClassLink;
