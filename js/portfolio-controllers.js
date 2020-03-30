/* eslint-disable no-underscore-dangle */

'use strict';

const _getProjectHtml = (project, idx) => {
  const {
    id,
    name,
    intro,
  } = project;
  return `
  <div class="col-md-4 col-sm-6 portfolio-item">
  <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${idx + 1}">
    <div class="portfolio-hover">
      <div class="portfolio-hover-content">
        <i class="fa fa-plus fa-3x"></i>
      </div>
    </div>
    <img class="img-fluid" src="img/portfolio/${id}.png" alt="${name}">
  </a>
  <div class="portfolio-caption">
    <h4>${name}</h4>
    <p class="text-muted">${intro.charAt(0).toUpperCase()}${intro.substr(1)}</p>
  </div>
</div>
  `;
};

const _renderProjects = () => {
  // eslint-disable-next-line no-undef
  const projects = getProjects();

  const strProjectHTMLs = projects
    .map(_getProjectHtml)
    .join('');
  $('.projects-container').html(strProjectHTMLs);
};

const _getModalHtml = (project, idx) => {
  const {
    id,
    name,
    intro,
    projUrl,
    publishedAt,
    description,
    client,
    category,
  } = project;
  return `
  <div
  class="portfolio-modal modal fade"
  id="portfolioModal${idx + 1}"
  tabindex="-1"
  role="dialog" 
  aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="close-modal" data-dismiss="modal">
            <div class="lr">
              <div class="rl"></div>
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-lg-8 mx-auto">
                <div class="modal-body">
                  <!-- Project Details Go Here -->
                  <h2>${name}</h2>
                  <p class="item-intro text-muted">
                    <a href="${projUrl}" target="_blank" rel="noopener">${name}</a> – ${intro}
                  </p>
                  <img
                  class="img-fluid d-block mx-auto"
                  src="img/portfolio/${id}-full.png" alt="${name}">
                  <p>
                    ${description}
                  </p>
                  <ul class="list-inline">
                    <li>Date: ${publishedAt}</li>
                    <li>Client: ${client}</li>
                    <li>Category: ${category}</li>  
                  </ul>
                  <button class="btn btn-primary" data-dismiss="modal" type="button">
                    <i class="fa fa-times"></i>
                    Close Project
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};

const _renderModals = () => {
  // eslint-disable-next-line no-undef
  const projects = getProjects();
  const strModalsHTMLs = projects
    .map(_getModalHtml)
    .join('');
  $('footer').after(strModalsHTMLs);
};

// eslint-disable-next-line no-unused-vars
const init = () => {
  _renderProjects();
  _renderModals();
};

$(init);
