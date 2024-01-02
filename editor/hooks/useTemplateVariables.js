import React from 'react'
import Froalaeditor from 'froala-editor'

const templateVariables = {
  '1': '{{OwnerFirstName}}',
  '2': '{{OwnerLastName}}',
  '3': '{{IntermediaryName}}',
  '4': '{{IntermediaryCode}}',
  '5': '{{ClientName}}',
  '6': '{{ClientCode}}',
  '7': '{{RequestEmissionDateDDMMYYYY}}',
  '8': '{{RequestEmissionDateMMDDYYYY}}',
  '9': '{{CcmRequestReference}}',
  '10': '{{Currency}}',
  '11': '{{Amount}}',
  '12': '{{OriginReferenceDateDDMMYYYY}}',
  '13': '{{OriginReferenceDateMMDDYYYY}}',
  '14': '{{OriginReference}}',
  '15': '{{IssuedAccountingReference}}',
  '16': '{{IssuedAccountingReferenceDateDDMMYYYY}}',
  '17': '{{IssuedAccountingReferenceDateMMDDYYYY}}',
  '18': '{{RequestComingFrom}}',
  '19': '{{CheckNumber}}',
  '20': '{{ClientReference}}',
  '21': '{{AreaOutsideCedicam}}',
  '22': '{{RegularizationReference}}',
  '23': '{{RegularizationDateDDMMYYYY}}',
  '24': '{{RegularizationDateMMDDYYYY}}',
  '25': '{{ValueDateDDMMYYYY}}',
  '26': '{{ValueDateMMDDYYYY}}'
}

const useTemplateVariables = ({ props }) => {
  React.useEffect(() => {
    if (props.withTemplateVariables) {
      Froalaeditor.RegisterCommand('Variables', {
        title: 'Variables',
        type: 'dropdown',
        focus: true,
        undo: true,
        options: templateVariables,
        callback: function (cmd, val, params) {
          const textToInsert = templateVariables[val]
          this.html.insert(textToInsert)
        }
      })
    }
  })
}

export default useTemplateVariables
