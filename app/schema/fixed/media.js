define(function(require, exports, module) {

  "use strict";

  module.exports = {
    "id":"directus_media",
    "table_name":"directus_media",
    "hidden":true,
    "single":false,
    "inactive_by_default":"0",
    "is_junction_table":false,
    "count":0,
    "url": "api/1/media",
    "title":"Media",

    "columns": [
      {
        "id":"item",
        "column_name":"item",
        "type":"ALIAS",
        "is_nullable":"NO",
        "comment":"The CMS will pull meta information from any pictures you upload. Paste YouTube or Vimeo links to embed videos",
        "sort":-1,
        "ui":"directus_fancy_media",
        "system":false,
        "master":false,
        "hidden_list":false,
        "hidden_input":false,
        "required":false
      },
      {
        "id":"url",
        "column_name":"url",
        "type":"VARCHAR",
        "is_nullable":"YES",
        "sort":-1,
        "ui":"directus_fancy_media",
        "system":true,
        "master":false,
        "hidden_list":false,
        "hidden_input":true,
        "required":false
      },
      {
        "id":"id",
        "column_name":"id",
        "type":"INT",
        "is_nullable":"NO",
        "comment":"",
        "sort":1,
        "system":true,
        "master":false,
        "hidden_list":false,
        "hidden_input":false,
        "required":false,
        "ui":"numeric",
        "hidden":true
      },
      {
        "id":"active",
        "column_name":"active",
        "type":"TINYINT",
        "is_nullable":"YES",
        "default_value":"1",
        "comment":"",
        "sort":2,
        "system":true,
        "master":false,
        "hidden_list":false,
        "hidden_input":false,
        "required":false,
        "ui":"checkbox",
        "hidden":true
      },
      {
        "id":"name",
        "column_name":"name",
        "type":"VARCHAR",
        "char_length":"255",
        "is_nullable":"YES",
        "comment":"",
        "sort":3,
        "system":false,
        "master":false,
        "hidden_list":false,
        "hidden_input":true,
        "required":false,
        "ui":"directus_fancy_media"
      },
      {
        "id":"title",
        "column_name":"title",
        "type":"VARCHAR",
        "char_length":"255",
        "is_nullable":"YES",
        "default_value":"",
        "comment":"",
        "sort":4,
        "system":false,
        "master":false,
        "hidden_list":false,
        "hidden_input":false,
        "required":false,
        "ui":"textinput"
      },
      {
        "id":"location",
        "column_name":"location",
        "type":"VARCHAR",
        "char_length":"200",
        "is_nullable":"YES",
        "comment":"",
        "sort":5,
        "system":false,
        "master":false,
        "hidden_list":false,
        "hidden_input":false,
        "required":false,
        "ui":"textinput"
      },
      {
        "id":"type",
        "column_name":"type",
        "type":"VARCHAR",
        "char_length":"50",
        "is_nullable":"YES",
        "default_value":"",
        "comment":"",
        "sort":6,
        "system":false,
        "master":false,
        "hidden_list":false,
        "hidden_input":true,
        "required":false,
        "ui":"textinput"
      },
      {
        "id":"charset",
        "column_name":"charset",
        "type":"VARCHAR",
        "char_length":"50",
        "is_nullable":"YES",
        "default_value":"",
        "comment":"",
        "sort":7,
        "system":true,
        "master":false,
        "hidden_list":false,
        "hidden_input":true,
        "required":false,
        "ui":"textinput"
      },
      {
        "id":"caption",
        "column_name":"caption",
        "type":"TEXT",
        "char_length":"65535",
        "is_nullable":"YES",
        "comment":"",
        "sort":8,
        "system":false,
        "master":false,
        "hidden_list":false,
        "hidden_input":false,
        "required":false,
        "ui":"textarea",
        "options":{
          "id":"textarea",
          "rows":"4"
        }
      },
      {
        "id":"tags",
        "column_name":"tags",
        "type":"VARCHAR",
        "char_length":"255",
        "is_nullable":"YES",
        "default_value":"",
        "comment":"",
        "sort":9,
        "ui":"tags",
        "system":false,
        "master":false,
        "hidden_list":false,
        "hidden_input":false,
        "required":false
      },
      {
        "id":"width",
        "column_name":"width",
        "type":"INT",
        "is_nullable":"YES",
        "default_value":"0",
        "comment":"",
        "sort":10,
        "system":false,
        "master":false,
        "hidden_list":false,
        "hidden_input":true,
        "required":false,
        "ui":"numeric"
      },
      {
        "id":"height",
        "column_name":"height",
        "type":"INT",
        "is_nullable":"YES",
        "default_value":"0",
        "comment":"",
        "sort":11,
        "ui":"numeric",
        "system":false,
        "master":false,
        "hidden_list":false,
        "hidden_input":true,
        "required":false
      },
      {
        "id":"size",
        "column_name":"size",
        "type":"INT",
        "is_nullable":"YES",
        "default_value":"0",
        "comment":"",
        "sort":12,
        "ui":"directus_media_size",
        "system":false,
        "master":false,
        "hidden_list":false,
        "hidden_input":true,
        "required":false
      },
      {
        "id":"embed_id",
        "column_name":"embed_id",
        "type":"VARCHAR",
        "char_length":"200",
        "is_nullable":"YES",
        "comment":"",
        "sort":13,
        "system":false,
        "master":false,
        "hidden_list":false,
        "hidden_input":true,
        "required":false,
        "ui":"textinput"
      },
      {
        "id":"user",
        "column_name":"user",
        "type":"INT",
        "is_nullable":"YES",
        "comment":"",
        "sort":14,
        "ui":"directus_user",
        "system":false,
        "master":false,
        "hidden_list":false,
        "hidden_input":true,
        "required":false,
        "options":{
          "id":"directus_user",
          "format":"short"
        }
      },
      {
        "id":"storage_adapter",
        "column_name":"storage_adapter",
        "type":"INT",
        "is_nullable":"YES",
        "comment":"",
        "sort":14,
        "ui":"numeric",
        "system":true,
        "master":false,
        "hidden_list":true,
        "hidden_input":true,
        "required":false
      },
      {
        "id":"date_uploaded",
        "column_name":"date_uploaded",
        "type":"DATETIME",
        "is_nullable":"YES",
        "comment":"",
        "sort":15,
        "system":false,
        "master":false,
        "hidden_list":false,
        "hidden_input":true,
        "required":false,
        "ui":"datetime",
        "options": {
          "id": "datetime",
          "contextual_date_in_listview": "1"
        }
      }
    ]
  };

});