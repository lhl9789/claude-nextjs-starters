#!/bin/bash
# PermissionRequest 훅: 도구명과 명령어를 Slack + macOS 데스크탑 알림으로 전송
source "$PWD/.claude/.env" 2>/dev/null

INPUT=$(cat)

TOOL_NAME=$(echo "$INPUT" | jq -r '.tool_name // "알 수 없음"')
COMMAND=$(echo "$INPUT" | jq -r '(.tool_input.command // (.tool_input | tostring)) | .[0:100]')

# macOS 데스크탑 알림
osascript -e "display notification \"도구: $TOOL_NAME\" with title \"🔔 Claude Code 권한 요청\" subtitle \"$COMMAND\" sound name \"Glass\"" 2>/dev/null || true

# Slack 알림
PAYLOAD=$(echo "$INPUT" | jq -c '{text: ("🔔 *[Claude Code] 권한 요청*\n• 도구: `" + .tool_name + "`\n• 명령어: `" + ((.tool_input.command // (.tool_input | tostring)) | .[0:300]) + "`")}')
curl -s -X POST -H 'Content-type: application/json' -d "$PAYLOAD" "$SLACK_WEBHOOK_URL" 2>/dev/null || true
