import React from "react"

const Content = () => {
  return (
    <>
      <div className="p-5 mb-4 bg-light rounded-3 border">
        <div className="container-fluid py-5">
          <h1 className="display-5 fw-bold">First paragraph in Jumbotron</h1>
          <p className="col-md-12 fs-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
            ipsa modi impedit, velit iste totam repellat, molestias tempora
            animi non quisquam cupiditate distinctio nemo reprehenderit fuga
            provident repellendus! Commodi, earum. Ratione quis sint architecto
            aliquam, deleniti earum tenetur culpa mollitia ipsa, harum animi
            temporibus maxime ipsum. Dignissimos illo quasi et molestias labore
            ducimus illum eos delectus quo exercitationem, eaque minima? Porro,
            voluptatum maxime incidunt dolores sapiente cum at voluptas quos
            nihil ad labore reprehenderit fuga harum omnis, ratione nisi
            officiis ducimus. Magnam quo ab, consequuntur ex dolorum hic
            temporibus ea. Quod voluptas aperiam eius eaque consequatur officiis
            repudiandae ut iure. Dicta at illum officia ipsum architecto, omnis
            consequatur odio. Dolores enim nihil perferendis animi aliquam ipsam
            harum reprehenderit inventore iste. Sed provident, ipsum sapiente ut
            excepturi vero totam earum nostrum neque voluptates ullam ex fugit
            sit ducimus, nam laboriosam aspernatur? Tempore nisi hic assumenda
            inventore vel unde ratione architecto perferendis?
          </p>
          <button
            className="btn btn-warning btn-lg"
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            Click here to show Modal Box
          </button>
        </div>
      </div>

      {/* Modal */}

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">This is my first modal box</div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Content
