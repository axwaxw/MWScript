/**
 * @license
 * Copyright (C) 2009 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview
 * Registers a language handler for MwScript for Moneyworks.
 *
 *
 * To use, include prettify.js and this file in your HTML page.
 * Then put your code in an HTML tag like
 *      <pre class="prettyprint lang-mwscript"></pre>
 *
 * @author alex@alexwebster.com

 */


 PR['registerLangHandler'](
  PR['createSimpleLexer'](
    [
      // Whitespace.
      [PR['PR_PLAIN'], /^[\t\n\r \xA0]+/, null, '\t\n\r \xA0']
    ],
    [
      // Single-line comments.
      [PR['PR_COMMENT'], /^\/\/(?:.*)/],

      // Multiline comments.
      [PR['PR_COMMENT'], /^\/\*[^*]*\*+(?:[^\/*][^*]*\*+)*\//], // */

      // General Keywords
      [PR['PR_KEYWORD'], /^\b(?:on|end|load|let|constant|persistent|property|public)\b/i],

	  // Conditional Keywords
      [PR['PR_KEYWORD'], /^\b(?:if\ifelse\else\endif\while)\b/i],

	  // Loop Keywords
      [PR['PR_KEYWORD'], /^\b(?:foreach|in)\b/i],

	  // Table Keywords
      // [PR['PR_KEYWORD'], /^\b(?:account|ledger|general|department|link|transaction|detail|log|taxrate|message|name|payments|product|job|build|jobsheet|bankrecs|autosplit|memo|user|user2|offledger|filter|stickies|lists|login)\b/i],

      // Function keywords.
      [PR['PR_KEYWORD'], /^\b(?:Abs|AddListLine|AddStatementTransaction|After|AgeByPeriod|Alert|AllowDeleteRecords|Allowed|AllowPostTransactions|Analyse|AppendPopupItems|Ask|Authenticate|AutoFillAcctDeptField|AutoFillField|Average|Base64Decode|Base64Encode|Before|ByteLength|Cancel|CancelTransaction|Char|CheckCodeField|Checksum|Choose|ChooseFromList|ClearFlag|Clicks|Close|CloseDocument|CloseWindow|Code128|Concat|ConcatWith|Count|CountLines|CreateArray|CreateListWindow|CreateSelection|CreateTable|CreateWindow|Curl_Close|Curl_Exec|Curl_Init|Curl_SetOpt|CurrencyConvert|CurrencyFormat|CurrentPeriod|Date|DateToPeriod|DateToText|Day|DayOfWeek|DeleteElement|DeleteListLine|DeletePopupItems|Dice|DisplaySelection|DisplayStickyNote|DoForm|DollarsToEnglish|DoReport|ElementExists|EnterCell|EnterField|ExchangeListRows|ExitedCell|ExitedField|ExpandDetail|ExpandList|Export|ExportImage|External|FieldLabel|File_Close|File_GetLength|File_GetMark|File_Move|File_Open|File_Read|File_ReadLine|File_SetMark|File_Write|Find|GetAppPreference|GetBalance|GetDatabaseFields|GetDatabaseFieldSize|GetDatabaseFiles|GetDialogHandle|GetFieldCount|GetFieldName|GetFieldNumber|GetFieldValue|GetLastErrorMessage|GetListContents|GetListField|GetListHandle|GetListLineCount|GetListName|GetMovement|GetMutex|GetOffBalance|GetPersistent|GetPlugins|GetProfile|GetScriptText|GetTaggedValue|GetTaxRate|GetUIField|GetWindowByID|GetWindowID|GetWindowName|GotoField|GotoNextField|Head|HexDecode|HexEncode|If|Import|ImportImage|InsertEditListObject|InsertListObject|InstallMenuCommand|InstallToolbarIcon|Int|IntersectSelection|ItemHit|JSON_AsXML|JSON_Free|JSON_Get|JSON_Parse|Left|Length|Load|LoadHTMLInWebView|LoadPicture|LoadURLInWebView|Log10|Log2|LogN|Lookup|Lower|Mail|Match|Max |MergeOrderLines|Mid|Min|Mod|ModalListWindow|ModalWindow|Month|Navigator|NumToEnglish|NumToPeriod|NumToText|OpenDocument|Pad|ParamsFromArray|PeriodName|PeriodOffset|PeriodToDate|PeriodToNum|PositionInText|PostedTransactions|PostTransactions|Pow|Proper|Quarter|Random|ReadCurrentRecordForWindow|RecordsSelected|ReleaseMutex|Replace|ReplaceField|Right|Round|SavePicture|Say|Say|SelectWindow|SetBudget|SetExchangeRate|SetFieldEnabling|SetFieldValue|SetFieldVisibility|SetFlag|SetListContents|SetListField|SetPersistent|SetReportColumnWidth|SetSidebarColour|SetupReport|Sign|Slice|Sort|SortListByColumn|SplitOrderLine|Sqrt|Subtotal|SuggestNameCode|Sum|SumDetail|SumSelection|SyncTransactionImage|SysLog|TableAccumulate|TableAccumulateColumn|TableFind|TableGet|Tail|TestFlags|TextToDate|TextToNum|Time|Today|Transpose|Trim|TypeOf|Unicode |UnionSelection|Unload|Upper|URLEncode|UserLoggedIn|UserLoggingOut|Val|Validate|ValidateCell|ValidateField|WebViewControl|WeekOfYear|WriteCurrentRecordForWindow|WriteToTempFile|Year)\b/i],

      // Keywords for types (format)
      [PR['PR_TYPE'], /^\b(?:True|False|Null)\b/i],

      // Multiline strings - double-quoted.
      [PR['PR_STRING'], /^r?[\"]{3}[\s|\S]*?[^\\][\"]{3}/],

      // Normal and raw strings double-quoted.
      [PR['PR_STRING'], /^r?\"(\"|(?:[^\n\r\f])*?[^\\]\")/],

	  // CURL Keywords for types.
      [PR['PR_TYPE'], /^\b(?:CURLOPT_WRITEDATA|CURLOPT_URL|CURLOPT_PORT|CURLOPT_PROXY|CURLOPT_USERPWD|CURLOPT_PROXYUSERPWD|CURLOPT_RANGE|CURLOPT_READDATA|CURLOPT_ERRORBUFFER|CURLOPT_WRITEFUNCTION|CURLOPT_READFUNCTION|CURLOPT_TIMEOUT|CURLOPT_INFILESIZE|CURLOPT_POSTFIELDS|CURLOPT_REFERER|CURLOPT_FTPPORT|CURLOPT_USERAGENT|CURLOPT_LOW_SPEED_LIMIT|CURLOPT_LOW_SPEED_TIME|CURLOPT_RESUME_FROM|CURLOPT_COOKIE|CURLOPT_HTTPHEADER|CURLOPT_HTTPPOST|CURLOPT_SSLCERT|CURLOPT_KEYPASSWD|CURLOPT_CRLF|CURLOPT_QUOTE|CURLOPT_HEADERDATA|CURLOPT_COOKIEFILE|CURLOPT_SSLVERSION|CURLOPT_TIMECONDITION|CURLOPT_TIMEVALUE|CURLOPT_CUSTOMREQUEST|CURLOPT_STDERR|CURLOPT_POSTQUOTE|CURLOPT_VERBOSE|CURLOPT_HEADER|CURLOPT_NOPROGRESS|CURLOPT_NOBODY|CURLOPT_FAILONERROR|CURLOPT_UPLOAD|CURLOPT_POST|CURLOPT_DIRLISTONLY|CURLOPT_APPEND|CURLOPT_NETRC|CURLOPT_FOLLOWLOCATION|CURLOPT_TRANSFERTEXT|CURLOPT_PUT|CURLOPT_AUTOREFERER|CURLOPT_PROXYPORT|CURLOPT_POSTFIELDSIZE|CURLOPT_HTTPPROXYTUNNEL|CURLOPT_INTERFACE|CURLOPT_KRBLEVEL|CURLOPT_SSL_VERIFYPEER|CURLOPT_CAINFO|CURLOPT_MAXREDIRS|CURLOPT_FILETIME|CURLOPT_TELNETOPTIONS|CURLOPT_MAXCONNECTS|CURLOPT_FRESH_CONNECT|CURLOPT_FORBID_REUSE|CURLOPT_RANDOM_FILE|CURLOPT_EGDSOCKET|CURLOPT_CONNECTTIMEOUT|CURLOPT_HEADERFUNCTION|CURLOPT_HTTPGET|CURLOPT_SSL_VERIFYHOST|CURLOPT_COOKIEJAR|CURLOPT_SSL_CIPHER_LIST|CURLOPT_HTTP_VERSION|CURLOPT_FTP_USE_EPSV|CURLOPT_SSLCERTTYPE|CURLOPT_SSLKEY|CURLOPT_SSLKEYTYPE|CURLOPT_SSLENGINE|CURLOPT_SSLENGINE_DEFAULT|CURLOPT_DNS_USE_GLOBAL_CACHE|CURLOPT_DNS_CACHE_TIMEOUT|CURLOPT_PREQUOTE|CURLOPT_COOKIESESSION|CURLOPT_CAPATH|CURLOPT_BUFFERSIZE|CURLOPT_NOSIGNAL|CURLOPT_SHARE|CURLOPT_PROXYTYPE|CURLOPT_ACCEPT_ENCODING|CURLOPT_HTTP200ALIASES|CURLOPT_UNRESTRICTED_AUTH|CURLOPT_HTTPAUTH|CURLOPT_FTP_CREATE_MISSING_DIRS|CURLOPT_PROXYAUTH|CURLOPT_FTP_RESPONSE_TIMEOUT|CURLOPT_SERVER_RESPONSE_TIMEOUT|CURLOPT_IPRESOLVE|CURLOPT_MAXFILESIZE|CURLOPT_NETRC_FILE|CURLOPT_TCP_NODELAY|CURLOPT_FTPSSLAUTH|CURLOPT_FTP_ACCOUNT|CURLOPT_COPYPOSTFIELDS)\b/i],

      // Identifiers.
      [PR['PR_PLAIN'], /^[a-z_$][a-z0-9_]*/i],

      // Operators.
      [PR['PR_PUNCTUATION'], /^[~!%^&*+=|?:<>/-]/],

      // Hex numbers.
      [PR['PR_LITERAL'], /^\b0x[0-9a-f]+/i],

      // Decimal numbers.
      [PR['PR_LITERAL'], /^\b\d+(?:\.\d*)?(?:e[+-]?\d+)?/i],
      [PR['PR_LITERAL'], /^\b\.\d+(?:e[+-]?\d+)?/i],

      // Punctuation.
      [PR['PR_PUNCTUATION'], /^[(){}\[\],.;]/]
    ]),
  ['mwscript']);


 
