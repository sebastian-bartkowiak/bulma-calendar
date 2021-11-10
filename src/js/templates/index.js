export default (data) => {
  return `<div id='${data.id}'>
    <div class="datetimepicker-dummy is-hidden">
      <div class="datetimepicker-dummy-left-icon">${data.type.startsWith('time')?data.icons.time:data.icons.date}</div>
      <div class="datetimepicker-dummy-wrapper">
        <input placeholder="${data.labelFrom}" readonly="readonly" class="datetimepicker-dummy-input${data.isRange ? ' is-datetimepicker-range' : ''}" type="text">
        ${data.isRange ? `<div class="datetimepicker-dummy-range-icon">${data.icons.rangeArrow}</div>` : ''}
        ${data.isRange ? `<input placeholder="${data.labelTo}" readonly="readonly" class="datetimepicker-dummy-input" type="text">`: ''}
      </div>
      <button class="datetimepicker-clear-button" type="button">${data.icons.clear}</button>
    </div>
    <div class="datetimepicker-wrapper${data.displayMode === 'dialog' ? ' modal' : ''}">
        <div class="modal-background${data.displayMode === 'dialog' ? '' : ' is-hidden'}"></div>
        <div class="datetimepicker">
          <div class="datetimepicker-container${data.headerPosition === 'top' ? '' : ' has-header-bottom'}"></div>
        </div>
    </div>
  </div>`;
};
